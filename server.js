const express = require("express");
const cors = require("cors");
const app = express();
const admin = require("firebase-admin");
require("dotenv").config();
const serviceAccount = require(process.env.SERVICE_ACCOUNT_PATH);
const port = 3001;

app.use(cors());
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();
async function query(input, interests) {
  data = { inputs: input, parameters: { candidate_labels: interests } };
  const response = await fetch(
    "https://api-inference.huggingface.co/models/MoritzLaurer/DeBERTa-v3-base-mnli-fever-anli",
    {
      headers: {
        Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}
app.get("/bart/:interests", (req, res) => {
  const collectionRef = db.collection("tweets");
  collectionRef
    .get()
    .then((snapshot) => {
      const updates = [];
      snapshot.forEach((doc) => {
        if (!doc.exists || !doc.data()?.hasOwnProperty("show")) {
          var text = doc._fieldsProto.text.stringValue;
          console.log("Tweet:\n" + text);
          var arr = req.params.interests.split(",");
          var shouldShow = false;
          query(text, arr).then((response) => {
            if (response) {
              console.log(response);
              for (var i = 0; i < response.scores.length; i++) {
                if (response.scores[i] > 0.7) {
                  console.log("Show: " + response.scores[i]);
                  shouldShow = true;
                  break;
                }
              }
            }
            const updatedData = {
              show: shouldShow,
            };
            // Create an update promise for each document
            const updatePromise = doc.ref.update(updatedData);
            updates.push(updatePromise);
          });
        }
      });
      // Execute all update promises in parallel
      return Promise.all(updates);
    })
    .catch((error) => {
      console.error("Error updating documents:", error);
    });
  res.send("Hello, World!");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
