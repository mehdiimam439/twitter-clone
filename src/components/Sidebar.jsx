import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption.jsx";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Button } from "@mui/material";

function Sidebar({ active }) {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar--icon" />
      <SidebarOption
        active={active == "home"}
        Icon={HomeRoundedIcon}
        text="Home"
        route="/"
      />
      <SidebarOption
        active={active == "search"}
        Icon={SearchRoundedIcon}
        text="Explore"
        route="/search"
      />
      <SidebarOption
        active={active == "profile"}
        Icon={PersonOutlineRoundedIcon}
        text="Profile"
        route="/profile"
      />
      <SidebarOption
        active={active == "settings"}
        Icon={SettingsOutlinedIcon}
        text="Settings"
        route="/settings"
      />

      <Button variant="outlined" className="sidebar--button" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
