import { Card, Table, TableCell, TableRow, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function CourseModel() {
	return (
		<Card sx={{ margin: "20px 0" }}>
			<Typography
				variant="h5"
				sx={{
					padding: "10px 20px",
					backgroundColor: "primary.main",
					borderTopLeftRadius: "6px",
					borderTopRightRadius: "6px",
				}}
			>
				DevWorks Bootcamp
			</Typography>

			<Typography variant="body1" sx={{ padding: "10px 20px" }}>
				Devworks is a full stack JavaScript Bootcamp located in the heart of
				Boston that focuses on the technologies you need to get a high paying
				job as a web developer
			</Typography>
			<Box sx={{ padding: "10px 20px" }}>
				<Table size="small" sx={{ width: "50%", margin: "auto" }}>
					<TableRow>
						<TableCell> Cost </TableCell>
						<TableCell align="right"> $50 </TableCell>
					</TableRow>
					<TableRow>
						<TableCell> Skill Required </TableCell>
						<TableCell align="right"> Beginner </TableCell>
					</TableRow>
					<TableRow>
						<TableCell> Scholarship Available </TableCell>
						<TableCell align="right"> Yes </TableCell>
					</TableRow>
				</Table>
			</Box>
			<Typography
				variant="h6"
				sx={{
					padding: "10px 20px",
				}}
			>
				Duration: 12 Weeks
			</Typography>
		</Card>
	);
}

export default CourseModel;
