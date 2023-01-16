import React, { createContext, useState } from "react";

const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);
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
