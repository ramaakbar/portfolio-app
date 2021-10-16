import React, { useContext } from "react";
import Home from "./components/home";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#111111" : "#f9fafb",
        color: darkMode && "#ffffff",
      }}
    >
      <Home />
    </div>
  );
}

export default App;
