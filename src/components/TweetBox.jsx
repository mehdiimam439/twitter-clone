import { Avatar, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./TweetBox.css";
import { auth } from "../config/firebase";
import db from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    getData().then((data) => setAvatar(data.avatar));
  }, []);

  const sendTweet = async (e) => {
    e.preventDefault();
    const data = await getData();
    console.log(data);
    addDoc(collection(db, "tweets"), {
      displayName: data.name,
      username: data.userName,
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: data.avatar,
      timeStamp: new Date().getTime(),
    });
    setTweetMessage("");
    setTweetImage("");
  };

  const getData = async () => {
    if (auth.currentUser) {
      const userRef = doc(db, "users", auth.currentUser.uid);

      try {
        const docSnapshot = await getDoc(userRef);
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          return userData;
        } else {
          console.log("User document does not exist.");
        }
      } catch (error) {
        console.error("Error retrieving user data: ", error);
      }
    } else {
      return [];
    }
  };

  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox--input">
          <Avatar src={avatar} />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What is happening?!"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox--imageInput"
          placeholder="Optional: Enter image URL"
        />
        <Button onClick={sendTweet} type="submit" className="tweetBox--button">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
