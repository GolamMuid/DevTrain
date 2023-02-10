import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useContext, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import ModeContext from "./contexts/ModeContext";
import router from "./routes/Routes";

function App() {
	const { darkMode } = useContext(ModeContext);
	const { palette } = createTheme();

	const themeLight = createTheme({
		palette: {
			mode: "light",
			primary: {
				main: "#9E77ED",
				// light: "rgb(24, 33, 64)",
				// dark: "rgb(24, 33, 64)",
			},
			secondary: {
				main: "#ff4e26",
			},
			info: {
				main: "#F8F6FA",
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
				main: "#9E77ED",
				// light: "rgb(24, 33, 64)",
				// dark: "rgb(24, 33, 64)",
			},
			secondary: {
				main: "#ff4e26",
			},
			info: {
				main: "#9D82BC",
			},
			warning: {
				main: "#f7bb25",
			},
			background: {
				default: "#0E1320",
				// paper: "#111927",
			},
			infoBlue: palette.augmentColor({
				color: {
					main: "#0288d1",
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
	});

	return (
		<ThemeProvider theme={darkMode ? themeDark : themeLight}>
			<CssBaseline />
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
