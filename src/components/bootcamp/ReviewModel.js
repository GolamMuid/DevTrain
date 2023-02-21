import { Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function ReviewModel({ title, text, rating }) {
	return (
		<Box padding="10px 0 20px">
			<Box
				display="flex"
				justifyContent="space-between"
				gap="20px"
				marginBottom="10px"
			>
				<Typography variant="h6">{title}</Typography>
				<Typography color="warning.main">
					<Rating
						value={rating > 5 ? rating / 2 : rating}
						precision={0.5}
						readOnly
					/>
				</Typography>
			</Box>
			<Typography variant="body1">{text}</Typography>
		</Box>
	);
}

export default ReviewModel;
