import React, { useState, useEffect } from "react";
import "./Explore.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Tweet from "./Tweet.jsx";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../config/firebase";
import FlipMove from "react-flip-move";
import { Button } from "@mui/material";

function Explore() {
  const [tweets, setTweets] = useState([]);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "tweets"), (snapshot) => {
      let tweets = snapshot.docs.map((doc) => {
        const data = doc.data();
        return { ...data, key: doc.id };
      });
      setTweets(tweets);
      searchTweets(tweets);
    });
  }, [search]);

  const searchTweets = () => {
    var matches = [];
    for (var i = 0; i < tweets.length; i++) {
      if (tweets[i].text.toLowerCase().includes(search.toLowerCase())) {
        matches.push(tweets[i]);
      }
    }
    setResults(matches);
  };

  return (
    <div className="explore">
      <div className="explore--input">
        <SearchRoundedIcon className="explore--searchIcon" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Twitter"
          type="text"
        />
      </div>
      <FlipMove>
        {results
          .sort((a, b) => b.timeStamp - a.timeStamp) // Sort the array by timestamp
          .map((post) => (
            <Tweet
              key={post.key}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              avatar={post.avatar}
              text={post.text}
              image={post.image}
              timeStamp={post.timeStamp}
            />
          ))}
        {/* {tweets.map((post) => console.log(post))} */}
      </FlipMove>
    </div>
  );
}

export default Explore;
