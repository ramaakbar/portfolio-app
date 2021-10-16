import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "./toggle.css";

function Toggle() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div
      className="toggle"
      style={{ color: darkMode && "#888888" }}
      onClick={handleClick}
    >
      <i class="fas fa-adjust"></i>
    </div>
  );
}

export default Toggle;
