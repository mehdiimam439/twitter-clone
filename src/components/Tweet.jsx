import React, { forwardRef } from "react";
import { Avatar } from "@mui/material";
import "./Tweet.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

const Tweet = forwardRef(
  (
    { displayName, username, verified, timeStamp, text, image, avatar },
    ref
  ) => {
    return (
      <div className="tweet" ref={ref}>
        <div className="tweet--avatar">
          <Avatar src={avatar} />
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
              <h3>{displayName}</h3>
              {verified && (
                <VerifiedIcon align="true" className="tweet--verified" />
              )}{" "}
              <span className="tweet--headerSpecial">
                @{username}
                {" · "}
                {new Date().toLocaleDateString() ==
                new Date(timeStamp).toLocaleDateString()
                  ? new Date(timeStamp).toLocaleTimeString()
                  : new Date(timeStamp).toLocaleDateString()}
              </span>
            </div>
            <div className="tweet--headerDesc">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} />
          <span className="tweet--headerSpecial">{}</span>
          <div className="tweet--footer">
            <ChatBubbleOutlineRoundedIcon fontSize="small" />
            <RepeatRoundedIcon fontSize="small" />
            <FavoriteBorderRoundedIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Tweet;
