import "./App.css";
import Auth from "./components/Auth";
import { Route, Routes } from "react-router-dom";
import Twitter from "./components/Twitter";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Feed from "./components/Feed.jsx";
import Explore from "./components/Explore.jsx";

function App() {
  return (
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
      </Route>
    </Routes>
  );
}

export default App;
