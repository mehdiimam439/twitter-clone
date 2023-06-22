import { Avatar, Button } from "@mui/material";
import React from "react";
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox--input">
          <Avatar src="" />
          <input placeholder="What is happening?!"></input>
        </div>
        <Button className="tweetBox--button">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
