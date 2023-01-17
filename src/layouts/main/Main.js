import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Main = ({ children }) => {
	return (
		<div>
			<Navbar />
			{children}
			<Outlet />
		</div>
	);
};

export default Main;
