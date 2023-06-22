import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption.jsx";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Button } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar--icon" />
      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={PersonOutlineIcon} text="Profile" />
      <Button variant="outlined" className="sidebar--button" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
