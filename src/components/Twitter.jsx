import "../App.css";
import Sidebar from "./Sidebar.jsx";
import Widgets from "./Widgets.jsx";

function Twitter({ active, Main }) {
  return (
    <div className="app">
      <Sidebar active={active} />

      <Main />

      <Widgets />
    </div>
  );
}

export default Twitter;
