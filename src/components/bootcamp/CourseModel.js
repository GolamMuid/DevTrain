import {
	Card,
	Table,
	TableBody,
	TableCell,
	TableRow,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function CourseModel(props) {
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
				{props.title}
			</Typography>

			<Typography variant="body1" sx={{ padding: "10px 20px" }}>
				{/* Devworks is a full stack JavaScript Bootcamp located in the heart of
				Boston that focuses on the technologies you need to get a high paying
				job as a web developer */}
				{props.description}
			</Typography>
			<Box sx={{ padding: "10px 20px" }}>
				<Table
					size="small"
					sx={{ width: "50%", margin: "auto", textTransform: "capitalize" }}
				>
					<TableBody>
						<TableRow>
							<TableCell> Cost </TableCell>
							<TableCell align="right"> ${props.tuition} </TableCell>
						</TableRow>
						<TableRow>
							<TableCell> Skill Required </TableCell>
							<TableCell align="right"> {props.minimumSkill} </TableCell>
						</TableRow>
						<TableRow>
							<TableCell> Scholarship Available </TableCell>
							<TableCell align="right">
								{props.scholarshipAvailable ? "Yes" : "No"}
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Box>
			<Typography
				variant="h6"
				sx={{
					padding: "10px 20px",
				}}
			>
				Duration: {props.weeks} Weeks
			</Typography>
		</Card>
	);
}

export default CourseModel;
