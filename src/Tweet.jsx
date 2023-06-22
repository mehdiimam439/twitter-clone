import React from "react";
import { Avatar } from "@mui/material";
import "./Tweet.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

function Tweet({
  displayName,
  username,
  verified,
  timestamp,
  text,
  image,
  avatar,
}) {
  return (
    <div className="tweet">
      <div className="tweet--avatar">
        <Avatar src="" />
      </div>
      <div className="tweet--body">
        <div className="tweet--header">
          <div
            className="tweet--headerText"
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <h3>Mehdi Imam</h3>
            <VerifiedIcon align className="tweet--verified" />{" "}
            <span className="tweet--headerSpecial">@mehdiimam439</span>
          </div>
          <div className="tweet--headerDesc">
            <p>Hello world!</p>
          </div>
        </div>
        <img
          src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1"
          alt="nyan-cat"
        />
        <div className="tweet--footer">
          <ChatBubbleOutlineRoundedIcon fontSize="small" />
          <RepeatRoundedIcon fontSize="small" />
          <FavoriteBorderRoundedIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Tweet;
