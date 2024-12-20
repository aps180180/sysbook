import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { useMediaQuery } from "@mui/material";
import { ThemeProvider, CssBaseline } from "@mui/material";
import createAppTheme from "../theme.jsx";

export const ThemeContext = createContext(null);

const ThemeContextProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme : dark)");
  const [mode, setMode] = useState(prefersDarkMode ? "dark": "light");
  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode,
      }}
    >
      <ThemeProvider theme={createAppTheme(mode)}>
        {children}
        <CssBaseline />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeContextProvider;
