import { Box, Button, Rating, TextField, Typography } from "@mui/material";
import React from "react";
import Container from "../../layouts/container/Container";
import { BeatLoader } from "react-spinners";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Review() {
	const { id } = useParams();

	const navigate = useNavigate();

	const [loading, setLoading] = useState(false);
	const [review, setReview] = useState({
		title: "",
		text: "",
		rating: 0,
	});

	const handleChange = (e) => {
		const { name, value } = e.target;

		setReview({
			...review,
			[name]: name === "rating" ? Number(value) : value,
		});
	};

	const handleSubmit = async () => {
		setLoading(true);
		const TOKEN = localStorage.getItem("DevTrain-Token").replace(/['"]+/g, "");
		try {
			const response = await axios.post(
				`https://devtrain.cyclic.app/api/v1/bootcamps/${id}/reviews`,
				review,
				{
					headers: {
						Authorization: `Bearer ${TOKEN}`,
					},
				}
			);
			console.log(response);
			if (response?.data?.success) {
				setLoading(false);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container>
			<Box marginBottom="10px">
				Write your experience on
				<Box
					component="div"
					sx={{ display: "inline", color: "primary.main", fontWeight: "700" }}
				>
					{/* &nbsp;{reviewInfo?.name}&nbsp; */}
				</Box>
			</Box>
			<TextField
				fullWidth
				placeholder="Title"
				value={review.title}
				name="title"
				onChange={(e) => handleChange(e)}
				sx={{ marginBottom: "10px" }}
			/>
			<TextField
				fullWidth
				multiline
				minRows={3}
				name="text"
				value={review.text}
				onChange={handleChange}
				placeholder="Description"
				sx={{ marginBottom: "10px" }}
			/>
			<Box
				component="div"
				sx={{
					display: "flex",
					alignItems: "center",
					gap: "10px",
					// justifyContent: "center",
				}}
			>
				<Typography variant="h6"> Rating: </Typography>

				<Rating name="rating" value={review.rating} onChange={handleChange} />
			</Box>
			<Box display="flex" justifyContent="end" gap="20px" marginTop="40px">
				{loading ? (
					<Button variant="contained">
						<BeatLoader size={13} color="#fff" />
					</Button>
				) : (
					<Button variant="contained" onClick={handleSubmit}>
						Post Review
					</Button>
				)}
			</Box>
		</Container>
	);
}

export default Review;
