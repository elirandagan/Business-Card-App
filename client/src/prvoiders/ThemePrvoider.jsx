import React, {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useState,
} from "react";
// import { createTheme, ThemePrvoider } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { node } from "prop-types";

// const ThemeContext = React.createContext(null);
const ThemeContext = createContext(null);

export const AppThemePrvoider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = useCallback(
    () => setIsDark((prev) => !prev),
    [setIsDark]
  );

  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });

  const value = useMemo(() => {
    return { isDark, toggleDarkMode };
  }, [isDark, toggleDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </ThemeProvider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw Error("useTheme must use with ThemeProvider");
  return context;
};

AppThemePrvoider.propTypes = {
  children: node.isRequired,
};
