import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox.jsx";
import Tweet from "./Tweet.jsx";

function Feed() {
  return (
    <div className="feed">
      <div className="feed--header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
}

export default Feed;
