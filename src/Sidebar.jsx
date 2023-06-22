import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption.jsx";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import { Button } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar--icon" />
      <SidebarOption active Icon={HomeRoundedIcon} text="Home" />
      <SidebarOption Icon={SearchRoundedIcon} text="Explore" />
      <SidebarOption Icon={PersonOutlineRoundedIcon} text="Profile" />
      <Button variant="outlined" className="sidebar--button" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
