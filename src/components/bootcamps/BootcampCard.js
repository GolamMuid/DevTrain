import styled from "@emotion/styled";
import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { BsStarFill } from "react-icons/bs";

function BootcampCard() {
	const BootcampCard = styled(Card)(({ theme }) => ({
		marginBottom: "20px",
		maxWidth: "100%",
		"& img": {
			maxWidth: "100%",
			maxHeight: "300px",
			objectFit: "contain",
			borderRadius: "4px",
			transition: "all 0.3s ease",
			margin: "auto",
			transform: "scale(1.1)",
		},
		"&:hover": {
			"& img": {
				transform: "scale(1.2)",
			},
		},
	}));

	return (
		<BootcampCard>
			<Box display="grid" gridTemplateColumns="1fr 2fr">
				<Box
					overflow="hidden"
					display="flex"
					alignItems="center"
					justifyContent="center"
					padding={{ xs: "0 10px", md: "0" }}
				>
					<img
						src={`${process.env.PUBLIC_URL}/assets/images/class.jpg`}
						alt="Bootcamp"
					/>
				</Box>
				<Box padding="10px">
					<Typography variant="h5" color="primary" padding="0 0 10px">
						Devworks Bootcamp
					</Typography>
					<Typography color="warning.main">
						<BsStarFill />
						<BsStarFill />
						<BsStarFill />
						<BsStarFill />
						<BsStarFill />
					</Typography>
					<Typography
						fontFamily="Roboto"
						fontWeight="400"
						fontSize={{ xs: "1rem" }}
						lineHeight="1"
						color="text.primary"
						padding="10px 0 0"
					>
						Enroll in a bootcamps that suits your career path and get started
					</Typography>
				</Box>
			</Box>
		</BootcampCard>
	);
}

export default BootcampCard;
