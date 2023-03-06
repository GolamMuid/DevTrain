import { Button, Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BootcampCard from "../bootcamps/BootcampCard";
import ReviewModal from "./ReviewModal";

function EnrollmentInfo({ userInfo }) {
	const enrolledBootcamps = userInfo?.bootcamps;
	const userId = userInfo?._id;
	console.log(userId);
	const navigate = useNavigate();

	const [reviewModal, setReviewModal] = useState(false);

	const [reviewInfo, setReviewInfo] = useState({});

	const handleReview = (id, name) => {
		setReviewModal(true);
		setReviewInfo({ name: name, id: id });
		console.log(name);
	};

	return (
		<Box>
			<Typography
				variant="h5"
				sx={{
					padding: "10px 20px",
					backgroundColor: "primary.main",
				}}
			>
				Enrolled Bootcamps
			</Typography>

			{enrolledBootcamps.length > 0 ? (
				<>
					{enrolledBootcamps?.map((bootcamp) => {
						return (
							<Box marginBottom="20px">
								<BootcampCard
									id={bootcamp.id}
									name={bootcamp.name}
									averageCost={bootcamp.averageCost}
									description={bootcamp.description}
									slug={bootcamp.slug}
								/>
								<Button
									variant="contained"
									sx={{ display: "block", margin: "10px auto" }}
									onClick={() => handleReview(bootcamp.id, bootcamp.name)}
								>
									Write a review
								</Button>
							</Box>
						);
					})}
				</>
			) : (
				<>
					<Typography variant="h5" sx={{ textAlign: "center", margin: "20px" }}>
						You haven't endrolled into any bootcamp yet
					</Typography>
					<Button
						variant="contained"
						sx={{ display: "block", margin: "auto", marginBottom: "20px" }}
						onClick={() => navigate("/bootcamps")}
					>
						Browse Bootcamps
					</Button>
				</>
			)}
			<ReviewModal
				reviewModal={reviewModal}
				setReviewModal={setReviewModal}
				reviewInfo={reviewInfo}
				userId={userId}
			/>
		</Box>
	);
}

export default EnrollmentInfo;
