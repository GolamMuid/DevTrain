import styled from "@emotion/styled";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";

function BootcampModel() {
	const BootcampModel = styled(Paper)(({ theme }) => ({
		marginBottom: "40px",
		"& div:nth-of-type(1)": {
			overflow: "hidden",
			maxHeight: "220px",
			maxWidth: "fit-content",
		},
		"& img": {
			width: "100%",
			objectFit: "cover",
			borderRadius: "4px",
			transition: "all 0.3s ease",
		},
		"&:hover": {
			"& img": {
				transform: "scale(1.1)",
			},
		},
	}));

	return (
		<BootcampModel elevation={3}>
			<Box>
				<img
					src={`${process.env.PUBLIC_URL}/assets/images/class.jpg`}
					alt="Bootcamp"
				/>
			</Box>
			<Box padding="10px 20px">
				<Typography variant="h5" color="text.primary">
					Course Name
				</Typography>
				<Typography variant="h6" color="text.secondary" marginBottom="10px">
					$10000
				</Typography>
				<Typography
					fontFamily="Roboto"
					fontWeight="400"
					fontSize={{ xs: "1rem" }}
					lineHeight="1"
					color="text.primary"
					marginBottom="10px"
				>
					Enroll in a bootcamps that suits your career path and get started
				</Typography>
				<Stack alignItems="center" margin="10px 0px 0">
					<Button variant="text" color="secondary">
						See Details
					</Button>
				</Stack>
			</Box>
		</BootcampModel>
	);
}

export default BootcampModel;
