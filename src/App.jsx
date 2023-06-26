import "./App.css";
import Auth from "./components/Auth";
import { Route, Routes } from "react-router-dom";
import Twitter from "./components/Twitter";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Feed from "./components/Feed.jsx";
import Explore from "./components/Explore.jsx";
import { Widgets } from "@mui/icons-material";
import Settings from "./components/Settings";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Twitter active="home" Main={Feed} />} />
          <Route
            path="/search"
            element={<Twitter active="search" Main={Explore} />}
          />
          <Route
            path="/profile"
            element={<Twitter active="profile" Main={Auth} />}
          />
          <Route
            path="/settings"
            element={
              <Twitter
                active="settings"
                Main={() => (
                  <Settings
                    isDarkMode={isDarkMode}
                    setIsDarkMode={setIsDarkMode}
                  />
                )}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
