import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets--input">
        <SearchRoundedIcon className="widgets--searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets--widgetContainer">
        <h2>What's happening?!</h2>
        <TwitterTweetEmbed tweetId={"1669104396536516609"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="AnthropicAI"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"github.com/mehdiimam439/twitter-clone"}
          options={{
            text: "Your Twitter clone is really cool!",
            via: "mehdiimam439",
          }}
        />
      </div>
    </div>
  );
}

export default Widgets;
