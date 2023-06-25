import React from "react";
import "./SidebarOption.css";
import { Link } from "react-router-dom";

function SidebarOption({ active, text, Icon, route }) {
  return (
    <Link to={route} className="sidebarOption--link">
      <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
        <Icon />
        <h2>{text}</h2>
      </div>
    </Link>
  );
}

export default SidebarOption;
