import { Card, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import ReviewModel from "./ReviewModel";

function Reviews() {
	return (
		<Box marginBottom="80px">
			<Container>
				<Box
					textAlign="center"
					marginBottom="40px"
					padding={{ xs: "0px 20px", md: "0px" }}
				>
					<Typography
						fontFamily="Roboto"
						fontSize="1rem"
						fontWeight="500"
						letterSpacing="3.5px"
						sx={{ color: "#f7bb25" }}
						padding="10px 0"
					>
						Our Testimonial
					</Typography>
					<Typography variant="h3" color="text.secondary" padding="10px 0">
						Review From Our Students
					</Typography>
				</Box>
				<Box
					display="grid"
					gridTemplateColumns={{
						xs: "1fr",
						md: "1fr 1fr",
						lg: "1fr 1fr 1fr",
					}}
					columnGap="40px"
					rowGap="20px"
					padding={{ xs: "0px 20px", md: "0px" }}
				>
					<ReviewModel />
					<ReviewModel />
					<ReviewModel />
				</Box>
			</Container>
		</Box>
	);
}

export default Reviews;
