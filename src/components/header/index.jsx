import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context";
import Toggle from "../toggle/Toggle";
import "./header.css";

function Header() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [showText, setShowText] = useState(false);
  const handleMouseEnter = (e) => {
    if (darkMode) {
      e.target.style.color = "#ffffff";
    } else {
      e.target.style.color = "black";
    }
    setShowText(true);
  };
  const handleMouseLeave = (e) => {
    e.target.style.color = "#888888";
    setShowText(false);
  };

  return (
    <div className="header">
      <nav>
        <a href="#" style={{ color: darkMode && "#888888" }}>
          <b>@ramaakbar</b>
        </a>
        <div className="link">
          {/* <a style={{ color: darkMode && "#888888" }} href="#">
            About
          </a> */}
          <a
            style={{ color: darkMode && "#888888" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            href="#experience"
          >
            Experience
          </a>
          <a
            style={{ color: darkMode && "#888888" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            href="#project"
          >
            Project
          </a>
          <Toggle />
        </div>
      </nav>
    </div>
  );
}

export default Header;
