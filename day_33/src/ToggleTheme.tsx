import ThemeContext from "./themeContext";
import { ThemeContextType } from "./themeContext";
import { useContext } from "react";

const ToggleTheme = () => {
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);
  return (
    <button
      className={theme ? "toggle-theme dark" : "toggle-theme"}
      onClick={() => {
        setTheme(!theme);
      }}
    >
      {!theme ? "dark" : "light"}
    </button>
  );
};

export default ToggleTheme;
