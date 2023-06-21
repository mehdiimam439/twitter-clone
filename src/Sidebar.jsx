import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption.jsx";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon />
      <SidebarOption Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
    </div>
  );
}

export default Sidebar;
