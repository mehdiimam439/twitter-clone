import React from "react";
import "./Settings.css";
import { Button } from "@mui/material";

function Settings() {
  const toggleDarkMode = () => {
    console.log("Dark mode toggled");
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <Button className="settings--button" onClick={toggleDarkMode}>
        Toggle Dark Mode
      </Button>
    </div>
  );
}

export default Settings;
