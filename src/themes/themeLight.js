import { createTheme } from "@mui/material";

const { palette } = createTheme();

const themeLight = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ff4e26",
      // light: "rgb(24, 33, 64)",
      // dark: "rgb(24, 33, 64)",
    },
    secondary: {
      main: "#9D82BC",
    },
    info: {
      main: "#ffebe7",
      // main: "rgba(255,78,38, 0.3)",
    },
    warning: {
      main: "#f7bb25",
    },
    text: {
      main: "rgb(72 , 72 , 72)",
    },
    infoBlue: palette.augmentColor({
      color: {
        main: "#0288d1",
      },
    }),
    navBg: palette.augmentColor({
      color: {
        main: "rgba(255, 0, 0, 0.0)",
        scrolled: "rgba(255, 255, 255, .85)",
      },
    }),
    chipPrimary: palette.augmentColor({
      color: {
        // main: "#ffebe7",
        main: "rgba(255, 78, 38, 0.20)",
      },
    }),
    footerLink: palette.augmentColor({
      color: {
        main: "#ff4e26",
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

export default themeLight;
