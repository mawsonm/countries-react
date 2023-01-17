import React, { useState, useReducer, useCallback } from "react";

export const ThemeContext = React.createContext({
  theme: { isDark: null, colors: {} },
  setTheme: (theme) => {},
});

const darkColors = {
  text: "text-[#ffffff]",
  elements: "bg-[#2b3945]",
  background: "bg-[#202c37]",
};

const darkTheme = {
  isDark: true,
  colors: darkColors,
};

const lightColors = {
  text: "text-[#111517]",
  elements: "bg-[#ffffff]",
  background: "bg-[#fafafa]",
};

const lightTheme = {
  isDark: false,
  colors: lightColors,
};

const reducer = (state, action) => {
  if (action.type === "DARK") {
    window.localStorage.setItem("countries-dark", "DARK");
    return {
      isDark: true,
      colors: darkColors,
    };
  } else if (action.type === "LIGHT") {
    window.localStorage.setItem("countries-dark", "LIGHT");
    return {
      isDark: false,
      colors: lightColors,
    };
  }
  throw Error("Unknown Action");
};

const ThemeContextProvider = (props) => {
  const localTheme = window.localStorage.getItem("countries-dark");
  let initialTheme;
  switch (localTheme) {
    case "DARK":
      initialTheme = darkTheme;
      break;
    case "LIGHT":
      initialTheme = lightTheme;
      break;
    default:
      initialTheme = lightTheme;
      break;
  }
  const [state, dispatch] = useReducer(reducer, initialTheme);

  const val = {
    theme: state,
    setTheme: dispatch,
  };

  return (
    <ThemeContext.Provider value={val}>{props.children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
