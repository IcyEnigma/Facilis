import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#calendar">Calendar</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#mail">Mail</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#weather">Weather</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#todo">To-Do</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#news">News</a>
        </li>
      </ul>
    </div>
  );
}
