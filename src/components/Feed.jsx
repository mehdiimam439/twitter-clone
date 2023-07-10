import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox.jsx";
import Tweet from "./Tweet.jsx";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../config/firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [tweets, setTweets] = useState([]);

  const renderTweets = async () => {
    onSnapshot(collection(db, "tweets"), (snapshot) => {
      let recievedTweets = snapshot.docs.map((doc) => {
        const data = doc.data();
        return { ...data, key: doc.id };
      });
      setTweets(recievedTweets);
    });
  };

  useEffect(() => {
    renderTweets();
  }, []);

  return (
    <div className="feed">
      <div className="feed--header">
        <h2>Home</h2>
      </div>

      <TweetBox
        displayName="{post.displayName}"
        username="{post.username}"
        verified={true}
        avatar="{post.avatar}"
      />

      <FlipMove>
        {tweets
          .sort((a, b) => b.timeStamp - a.timeStamp) // Sort the array by timestamp
          .map((post) => (
            <Tweet
              key={post.key}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              timeStamp={post.timeStamp}
              avatar={post.avatar}
              text={post.text}
              image={post.image}
              hidden={!post.show}
            />
          ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
