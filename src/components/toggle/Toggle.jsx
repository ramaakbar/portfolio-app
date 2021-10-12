import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "./toggle.css";

function Toggle() {
  const theme = useContext(ThemeContext);
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="toggle" onClick={handleClick}>
      <i class="fas fa-adjust"></i>
    </div>
  );
}

export default Toggle;
