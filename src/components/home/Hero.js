import { Box } from "@mui/system";
import React from "react";
import Lottie from "lottie-react";
import * as animationData from "../../assets/85362-coding.json";
import { Button, Stack, Typography } from "@mui/material";
import Container from "../../layouts/container/Container";

function Hero() {
	return (
		<Container>
			<Box
				display="flex"
				flexDirection={{ xs: "column-reverse", md: "row" }}
				alignItems="center"
				justifyContent="space-around"
				padding="20px"
				height="calc(100vh - 120px)"
			>
				<Box>
					<Typography
						fontFamily="Roboto"
						fontSize="1rem"
						fontWeight="500"
						letterSpacing="3.5px"
						sx={{ color: "#f7bb25" }}
						padding="20px 0"
					>
						Get ready to learn
					</Typography>
					<Typography
						color="text.secondary"
						letterSpacing="3.5px"
						fontFamily="Sofia Sans Semi Condensed"
						fontWeight="700"
						fontSize={{ xs: "2.4rem", lg: "4rem" }}
						lineHeight="1"

						// sx={{ color: "text.primary" }}
					>
						Enter The World Of
					</Typography>
					<Typography
						fontFamily="Sofia Sans Semi Condensed"
						letterSpacing="3.5px"
						fontWeight="700"
						fontSize={{ xs: "2.4rem", lg: "4rem" }}
						lineHeight="1"
						color="text.primary"
					>
						DEVELOPMENT
					</Typography>
					<Typography
						fontFamily="Roboto"
						// letterSpacing="2px"
						fontWeight="700"
						fontSize={{ xs: "1rem", lg: "1.125rem" }}
						lineHeight="1"
						color="text.secondary"
						padding="20px 0px"
						sx={{ lineHeight: "1.3" }}
					>
						Enroll in a course and <br /> Start your journey to become a
						developer today
					</Typography>
					<Stack alignItems="start" padding="20px 0">
						<Button variant="contained" size="large" color="primary">
							Enroll Now
						</Button>
					</Stack>
				</Box>
				<Box>
					<Lottie
						//  options={defaultOptions}
						//     height={300}
						//     width={300}
						animationData={animationData}
						// style={{ maxHeight: "300px" }}
					/>
				</Box>
			</Box>
		</Container>
	);
}

export default Hero;
