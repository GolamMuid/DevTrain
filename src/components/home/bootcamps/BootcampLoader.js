import { Button, Paper, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function BootcampLoader() {
	return (
		<Paper elevation={3}>
			<Skeleton variant="rounded" height="200px" />
			<Box padding="20px 20px">
				<Skeleton
					variant="rounded"
					height="24px"
					sx={{ marginBottom: "10px" }}
				/>
				<Skeleton
					variant="rounded"
					height="20px"
					sx={{ marginBottom: "20px" }}
				/>
				<Skeleton
					variant="rounded"
					height="32px"
					sx={{ marginBottom: "20px" }}
				/>
				<Skeleton variant="rounded" height="16px" />
			</Box>
		</Paper>
	);
}

export default BootcampLoader;
