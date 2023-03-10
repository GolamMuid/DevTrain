import { Paper, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Tabpanel = ({ value, index, children }) => {
	return value === index && <Box role="tabpanel">{children}</Box>;
};

function Login() {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<Box
				minHeight="100vh"
				display="flex"
				alignItems="center"
				justifyContent="center"
				sx={{
					backgroundImage: "url(/assets/images/gradient-bg.svg)",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<Paper
					sx={{
						minWidth: { xs: "80vw", md: "50vw" },
						backgroundColor: "rgba(255, 255, 255, .15)",
						backdropFilter: "blur(5px)",
						padding: "20px",
					}}
				>
					<Typography variant="h3" textAlign="center" color="primary">
						{" "}
						DevTrain{" "}
					</Typography>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label="disabled tabs example"
						variant="fullWidth"
					>
						<Tab value={0} label="Login" />
						<Tab value={1} label="Register" />
					</Tabs>
					<Tabpanel value={value} index={0}>
						<LoginForm />
					</Tabpanel>
					<Tabpanel value={value} index={1}>
						<RegisterForm />
					</Tabpanel>
				</Paper>
			</Box>
		</>
	);
}

export default Login;
