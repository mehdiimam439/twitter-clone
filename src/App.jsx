import "./App.css";
import Sidebar from "./Sidebar.jsx";
import Feed from "./Feed.jsx";
import Widgets from "./Widgets.jsx";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <Feed />

      <Widgets />
    </div>
  );
}

export default App;
