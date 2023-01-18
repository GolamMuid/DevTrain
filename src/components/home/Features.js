import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Container from "../../layouts/container/Container";

function Features() {
	return (
		<Box
			sx={{
				backgroundColor: "info.main",
				// minHeight: "200px",
				borderRadius: "30%",
				padding: "60px 0",
			}}
		>
			<Container>
				<Box display="flex" alignItems="center" justifyContent="space-between">
					<Paper sx={{ minHeight: "200px" }}> 40 </Paper>
					<Paper sx={{ minHeight: "200px" }}> 40 </Paper>
					<Paper sx={{ minHeight: "200px" }}> 40 </Paper>
					<Paper sx={{ minHeight: "200px" }}> 40 </Paper>
				</Box>
			</Container>
		</Box>
	);
}

export default Features;
