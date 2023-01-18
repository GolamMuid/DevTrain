import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import ModeContext from "./contexts/ModeContext";
import router from "./routes/Routes";

function App() {
  const { darkMode } = useContext(ModeContext);

  const themeLight = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#9D82BC",
        // light: "rgb(24, 33, 64)",
        // dark: "rgb(24, 33, 64)",
      },
      secondary: {
        main: "#ff4e26",
      },
      info: {
        main: "#F8F6FA",
      },
      text: {
        main: "rgb(72 , 72 , 72)",
      },
    },
    typography: {
      fontFamily:
        "Inter, Sofia Sans Semi Condensed, Josefin Sans, Roboto, sans-serif",
      button: {
        fontWeight: "600",
      },
      h1: {
        fontFamily: "Josefin Sans,sans-serif",
      },
      h2: {
        fontFamily: "Josefin Sans,sans-serif",
      },
      h3: {
        fontFamily: "Josefin Sans,sans-serif",
      },
      h4: {
        fontFamily: "Josefin Sans,sans-serif",
      },
      h5: {
        fontFamily: "Josefin Sans,sans-serif",
      },
      h6: {
        fontFamily: "Josefin Sans,sans-serif",
      },
    },
  });

  const themeDark = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#9D82BC",
        // light: "rgb(24, 33, 64)",
        // dark: "rgb(24, 33, 64)",
      },
      secondary: {
        main: "#ff4e26",
      },
      info: {
        main: "#9D82BC",
      },
      background: {
        default: "#22253C",
        paper: "#1d1d25",
      },
    },
    typography: {
      fontFamily:
        "Inter, Sofia Sans Semi Condensed, Josefin Sans, Roboto, sans-serif",
      button: {
        fontWeight: "600",
      },
    },
  });

  return (
    <ThemeProvider theme={darkMode ? themeDark : themeLight}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
