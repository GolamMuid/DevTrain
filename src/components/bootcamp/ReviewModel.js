import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { BsStarFill } from "react-icons/bs";

function ReviewModel({ title, text }) {
	return (
		<Box padding="10px 0 20px">
			<Box display="flex" justifyContent="space-between">
				<Typography variant="h6">{title}</Typography>
				<Typography color="warning.main">
					<BsStarFill />
					<BsStarFill />
					<BsStarFill />
					<BsStarFill />
					<BsStarFill />
				</Typography>
			</Box>
			<Typography variant="body1">{text}</Typography>
		</Box>
	);
}

export default ReviewModel;
