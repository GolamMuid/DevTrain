import React, { createContext, useEffect, useState } from "react";

const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(
		JSON.parse(localStorage.getItem("mode")) || false
	);
	useEffect(() => {
		localStorage.setItem("mode", JSON.stringify(darkMode));
	}, [darkMode]);
	const handleDarkMode = () => setDarkMode(!darkMode);

	return (
		<ModeContext.Provider
			value={{
				darkMode,
				handleDarkMode,
			}}
		>
			{children}
		</ModeContext.Provider>
	);
};

export default ModeContext;
