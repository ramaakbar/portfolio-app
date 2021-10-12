import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import Toggle from "../toggle/Toggle";
import "./header.css";

function Header() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="header">
      <nav>
        <Toggle />
        <div className="link">
          <a style={{ color: darkMode && "#888888" }} href="#">
            About
          </a>
          <a style={{ color: darkMode && "#888888" }} href="#">
            Experience
          </a>
          <a style={{ color: darkMode && "#888888" }} href="#">
            Project
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
