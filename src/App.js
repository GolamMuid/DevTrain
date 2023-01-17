import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import ModeContext from "./contexts/ModeContext";
import Container from "./layouts/container/Container";
import Navbar from "./layouts/navbar/Navbar";
import router from "./routes/Routes";

function App() {
	const { darkMode } = useContext(ModeContext);

	const themeLight = createTheme({
		palette: {
			mode: "light",
			primary: {
				main: "rgb(24, 33, 64)",
				light: "rgb(24, 33, 64)",
				dark: "rgb(24, 33, 64)",
			},
			secondary: {
				main: "#ff4e26",
			},
		},
		typography: {
			fontFamily: "Inter, sans-serif",
			button: {
				fontWeight: "600",
			},
		},
	});

	const themeDark = createTheme({
		palette: {
			mode: "dark",
			primary: {
				main: "rgb(24, 33, 64)",
				light: "rgb(24, 33, 64)",
				dark: "rgb(24, 33, 64)",
			},
			secondary: {
				main: "#ff4e26",
			},
			background: {
				default: "#22253C",
				paper: "#1d1d25",
			},
		},
		typography: {
			fontFamily: "Inter, Sofia Sans Semi Condensed, sans-serif",
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
