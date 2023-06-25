import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox.jsx";
import Tweet from "./Tweet.jsx";
import { collection, onSnapshot } from "firebase/firestore";
import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "tweets"), (snapshot) => {
      let tweets = snapshot.docs.map((doc) => {
        const data = doc.data();
        return { ...data, id: doc.id };
      });
      setTweets(tweets);
    });
  }, []);

  return (
    <div className="feed">
      <div className="feed--header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>
        {tweets.map((post) => (
          <Tweet
            id={post.id}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
