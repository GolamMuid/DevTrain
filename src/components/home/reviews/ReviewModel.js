import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { BsStarFill } from "react-icons/bs";

function ReviewModel() {
	return (
		<Card sx={{ backgroundColor: "primary.main" }}>
			<CardContent sx={{ padding: "20px 10px" }}>
				<Typography textAlign="center" padding="10px" color="#FFE779">
					<BsStarFill />
					<BsStarFill />
					<BsStarFill />
					<BsStarFill />
					<BsStarFill />
				</Typography>
				<Typography variant="h6" textAlign="center">
					John Doe
				</Typography>
				<Box padding="10px">
					<Typography variant="p">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
						tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
					</Typography>
				</Box>
			</CardContent>
		</Card>
	);
}

export default ReviewModel;
