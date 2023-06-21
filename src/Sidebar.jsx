import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption.jsx";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon />
      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <Button variant="outlined" className="sidebar--button" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
