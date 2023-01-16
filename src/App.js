import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useContext } from "react";
import "./App.css";
import ModeContext from "./contexts/ModeContext";
import Navbar from "./layouts/Navbar";

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
				main: "#f50057",
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
				main: "#f50057",
			},
			background: {
				default: "#121218",
				paper: "#1d1d25",
			},
		},
		typography: {
			fontFamily: "Inter, sans-serif",
			button: {
				fontWeight: "600",
			},
		},
	});

	return (
		<ThemeProvider theme={darkMode ? themeDark : themeLight}>
			<CssBaseline />
			<Navbar />
		</ThemeProvider>
	);
}

export default App;
