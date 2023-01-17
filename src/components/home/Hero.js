import { Box } from "@mui/system";
import React from "react";
import Lottie from "lottie-react";
import * as animationData from "../../assets/85362-coding.json";
import { Button, Paper, Stack, Typography } from "@mui/material";

function Hero() {
	return (
		<Box
			display={{ xs: "block", lg: "grid" }}
			gridTemplateColumns="2fr 3fr"
			alignItems="center"
			gap="20px"
			padding="20px"
			height="calc(100vh - 80px)"
		>
			<Box display={{ xs: "none", lg: "block" }}>
				<Lottie
					//  options={defaultOptions}
					//     height={300}
					//     width={300}
					animationData={animationData}
					// style={{ maxHeight: "300px" }}
				/>
			</Box>
			<Box>
				<Typography
					textAlign="right"
					color="secondary"
					fontFamily="Sofia Sans Semi Condensed"
					fontWeight="900"
					fontSize={{ xs: "4rem", lg: "5rem" }}
					lineHeight="1"
				>
					Join a bootcamp
				</Typography>
				<Typography
					textAlign="right"
					color="secondary"
					fontFamily="Sofia Sans Semi Condensed"
					fontWeight="900"
					fontSize={{ xs: "3rem", lg: "3.8rem" }}
					lineHeight="1"
				>
					and become a developer
				</Typography>
				<Stack alignItems="end" padding="20px">
					<Button variant="contained" size="large" color="secondary">
						Enroll Now
					</Button>
				</Stack>
			</Box>
		</Box>
	);
}

export default Hero;
