// import { createContext } from "react";
import React from "react";

export interface ThemeContextType {
  theme: boolean;
  setTheme: (theme: boolean) => void;
}

const intialState: ThemeContextType = {
  theme: false,
  setTheme: (theme) => {},
};

const ThemeContext = React.createContext(intialState);

export default ThemeContext;
