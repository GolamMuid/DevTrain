import { createTheme } from "@mui/material";

const { palette } = createTheme();

const themeDark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff4e26",
      // light: "rgb(24, 33, 64)",
      // dark: "rgb(24, 33, 64)",
    },
    secondary: {
      main: "#9D82BC",
    },
    info: {
      // main: "#9D82BC",
      main: "#ff4e26",
    },
    warning: {
      main: "#f7bb25",
    },
    background: {
      default: "#0E1320",
      paper: "#1D2532",
    },
    infoBlue: palette.augmentColor({
      color: {
        main: "#0288d1",
      },
    }),
    navBg: palette.augmentColor({
      color: {
        main: "rgba(255, 0, 0, 0.0)",
        scrolled: "rgba(	14,	19,	32, .85)",
      },
    }),
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
  shape: {
    borderRadius: 10,
  },
});

export default themeDark;
