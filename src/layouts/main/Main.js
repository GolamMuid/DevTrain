import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Main = ({ children }) => {
	return (
		<div>
			<Navbar />
			<Box sx={{ height: "80px" }}></Box>
			{children}
			<Outlet />
		</div>
	);
};

export default Main;
