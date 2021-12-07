import Topbar from "./components/topbar/Topbar";
import Calendar from "./components/calendar/Calendar";
import Mail from "./components/mail/Mail";
import Weather from "./components/weather/Weather";
import NewsApp from "./components/news/News";
import Todo from "./components/todo/Todo";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Calendar />
        <Mail />
        <Weather />
        <Todo />
        <NewsApp />
      </div>
    </div>
  );
}

export default App;
