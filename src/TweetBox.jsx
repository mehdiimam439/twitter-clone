import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import db from "./firebase";
import { collection, addDoc } from "firebase/firestore";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    addDoc(collection(db, "tweets"), {
      displayName: "displayName",
      username: "username",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "",
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox--input">
          <Avatar src="" />
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
