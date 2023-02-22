import { Button, Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import BootcampCard from "../bootcamps/BootcampCard";

function BootcampInfo() {
	const navigate = useNavigate();

	return (
		<Box>
			<Card>
				<Typography
					variant="h5"
					sx={{
						padding: "10px 20px",
						backgroundColor: "primary.main",
						borderTopLeftRadius: "6px",
						borderTopRightRadius: "6px",
					}}
				>
					Bootcamp Info
				</Typography>

				<BootcampCard
					key="1" // {bootcamp.id}
					id="1" // {bootcamp.id}
					name="Devcamper Bootcamp" // {bootcamp.name}
					averageCost="$10000" //{bootcamp.averageCost}
					description="Is coding your passion? Codemasters will give you the skills and the tools to become the best developer possible. We specialize in front end and full stack web development"
					// {bootcamp.description}
					slug="1" // {bootcamp.slug}
				/>
			</Card>
			<Box padding="20px">
				<Button
					sx={{ display: "block", margin: "auto" }}
					onClick={() => navigate("/manage-bootcamp")}
				>
					Manage Bootcamp
				</Button>
			</Box>
		</Box>
	);
}

export default BootcampInfo;
