import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Aos from "aos";
import React, { useContext, useEffect } from "react";
import ModeContext from "../../contexts/ModeContext";
import Container from "../../layouts/container/Container";

function Features() {
	const { darkMode } = useContext(ModeContext);

	return (
		<div data-aos="zoom-in-down" data-aos-duration="9000">
			<Box
				sx={{
					backgroundColor: "info.main",
					borderRadius: "30%",
					padding: { xs: "60px 30px", md: "60px 0" },
					marginBottom: "80px",
				}}
			>
				<Container>
					<Box
						display="grid"
						gridTemplateColumns={{
							xs: "1fr",
							md: "1fr 1fr",
							lg: "1fr 1fr 1fr 1fr",
						}}
						gap="20px"
					>
						<Paper>
							<Box padding="20px 10px">
								<img
									src={`${process.env.PUBLIC_URL}/assets/images/trainer.png`}
									alt="Expert Trainers"
									style={{ height: "90px" }}
								/>
								<Typography
									variant="h5"
									color="text.secondary"
									padding="10px 0"
								>
									Expert Trainers
								</Typography>
								<Typography variant="p" color="text.primary" padding="10px 0">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</Typography>
							</Box>
						</Paper>
						<Paper>
							<Box padding="20px 10px">
								<img
									src={`${process.env.PUBLIC_URL}/assets/images/certificate.png`}
									alt="Expert Trainers"
									style={{ height: "90px" }}
								/>
								<Typography
									variant="h5"
									color="text.secondary"
									padding="10px 0"
								>
									Certification
								</Typography>
								<Typography variant="p" color="text.primary" padding="10px 0">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</Typography>
							</Box>
						</Paper>
						<Paper>
							<Box padding="20px 10px">
								<img
									src={`${process.env.PUBLIC_URL}/assets/images/scholarship.png`}
									alt="Expert Trainers"
									style={{ height: "90px" }}
								/>
								<Typography
									variant="h5"
									color="text.secondary"
									padding="10px 0"
								>
									Scholarship
								</Typography>
								<Typography variant="p" color="text.primary" padding="10px 0">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</Typography>
							</Box>
						</Paper>
						<Paper>
							<Box padding="20px 10px">
								<img
									src={`${process.env.PUBLIC_URL}/assets/images/job.png`}
									alt="Expert Trainers"
									style={{ height: "90px" }}
								/>
								<Typography
									variant="h5"
									color="text.secondary"
									padding="10px 0"
								>
									Job Assistance
								</Typography>
								<Typography variant="p" color="text.primary" padding="10px 0">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</Typography>
							</Box>
						</Paper>
					</Box>
				</Container>
			</Box>
		</div>
	);
}

export default Features;
