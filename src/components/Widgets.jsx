import React from "react";
import { TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";
import "../App.css";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets--widgetContainer">
        <h2>Tweet Of The Week</h2>
        <TwitterTweetEmbed
          data-theme={"dark"}
          tweetId={"1669104396536516609"}
          className="widgets--tweet"
        />
        <TwitterShareButton
          url={"github.com/mehdiimam439/twitter-clone"}
          options={{
            text: "This Twitter clone by Mehdi Imam and Tanzia Nur is really cool!",
          }}
        />
      </div>
    </div>
  );
}

export default Widgets;
