import React from "react";
import "./App.css";

import { useState } from "react";
import ThemeContext from "./themeContext";
import ToggleTheme from "./ToggleTheme";
import Todos from "./Todos";

const App = () => {
  const [theme, setTheme] = useState(false);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">
        <Todos />
        <ToggleTheme />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
