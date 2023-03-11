import styled from "@emotion/styled";
import {
	Button,
	Checkbox,
	FormControlLabel,
	FormHelperText,
	InputAdornment,
	MenuItem,
	OutlinedInput,
	TextField,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { PuffLoader } from "react-spinners";

const InputBox = styled(Box)(({ theme }) => ({
	marginBottom: "20px",
}));

function EditCourse() {
	const { id } = useParams();
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const [courseInfo, setCourseInfo] = useState({});
	const [isloading, setisloading] = useState(false);

	useEffect(() => {
		setisloading(true);
		fetch(`https://devtrain.cyclic.app/api/v1/courses/${id}`)
			.then((res) => res.json())
			.then((result) => {
				setCourseInfo(result.data);
			})
			.finally(() => setisloading(false));
	}, [id]);

	// const [courseInfo, isloading] = useFetch(
	// 	`https://devtrain.cyclic.app/api/v1/courses/${id}`,
	// 	"courseSingle"
	// );

	console.log(courseInfo);

	const onSubmit = (data) => {
		console.log("ss", data);
	};
	// if (isloading) {
	// 	return (
	// 		<div>
	// 			<PuffLoader />
	// 		</div>
	// 	);
	// }

	return (
		<div>
			{/* {isloading ? (
				<PuffLoader />
			) : ( */}
			<form onSubmit={handleSubmit(onSubmit)}>
				<Typography variant="h4" sx={{ padding: "20px" }}>
					{" "}
					Edit Course{" "}
				</Typography>
				<Box
					display="grid"
					gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
					gap={{ xs: "0px", md: "20px" }}
					maxHeight="65vh"
					overflow="auto"
					position="relative"
				>
					{/* Left Column starts */}

					<Box padding="20px">
						<> {courseInfo.title} </>
						<InputBox>
							<Typography variant="body1">Course Title :</Typography>
							{/* <TextField
								fullWidth
								size="small"
								placeholder="Course Title"
								defaultValue={courseInfo.description}
								{...register("title", {
									required: true,
								})}
								// error={Boolean(errors.title)}
								// helperText={errors.title?.message}
							/> */}
							<TextField
								fullWidth
								size="small"
								// multiline
								rows={1}
								defaultValue={courseInfo.title}
								placeholder="Title"
								{...register("title", {
									// required: true,
									// maxLength: 500,
								})}
								error={Boolean(errors.title)}
								helperText={
									errors.title?.type === "required" && "Title is required"
									// : errors.title?.type === "maxLength"
									// ? "Description cannot be longer than 500 characters"
									// : ""
								}
							/>
						</InputBox>
						<InputBox>
							<input defaultValue={courseInfo.title} />
						</InputBox>
						<InputBox>
							<Typography variant="body1">Duration :</Typography>
							<TextField
								fullWidth
								size="small"
								placeholder="Number of weeks"
								defaultValue={courseInfo?.weeks}
								{...register("weeks", {
									required: "Duration is required",
								})}
								error={Boolean(errors.weeks)}
								helperText={errors.weeks?.message}
							/>
						</InputBox>
						<InputBox>
							<Typography variant="body1">Course Tuition :</Typography>
							<OutlinedInput
								type="number"
								fullWidth
								size="small"
								defaultValue={courseInfo?.tuition}
								startAdornment={
									<InputAdornment position="start">$</InputAdornment>
								}
								placeholder="Tuition in USD"
								{...register("tuition", {
									required: "Tuition is required",
								})}
								error={Boolean(errors.tuition)}
							/>
							{errors?.tuition?.type === "required" && (
								<FormHelperText sx={{ color: "red" }}>
									Course is required
								</FormHelperText>
							)}
						</InputBox>
					</Box>

					{/* Left Column ends */}

					{/* Right Column starts */}

					<Box padding="20px">
						<InputBox>
							<Typography variant="body1">Course Description :</Typography>
							<TextField
								fullWidth
								size="small"
								multiline
								rows={4}
								defaultValue={courseInfo.description}
								placeholder="Basic information about the course within 500 characters"
								{...register("description", {
									required: true,
									maxLength: 500,
								})}
								error={Boolean(errors.description)}
								helperText={
									errors.description?.type === "required"
										? "Description is required"
										: errors.description?.type === "maxLength"
										? "Description cannot be longer than 500 characters"
										: ""
								}
							/>
						</InputBox>
						<InputBox>
							<Typography variant="body1">Minimum Skill Required :</Typography>
							{/* <TextField
								// name="active_status"
								select
								fullWidth
								size="small"
								{...register("minimumSkill")}
								defaultValue={courseInfo.minimumSkill}
							>
								<MenuItem value="beginner">Beginner</MenuItem>
								<MenuItem value="intermediate">Intermediate</MenuItem>
								<MenuItem value="advanced">Advanced</MenuItem>
							</TextField> */}
							<select
								// name="active_status"
								// select
								// fullWidth
								// size="small"
								// {...register("minimumSkill")}
								defaultValue={courseInfo.minimumSkill}
							>
								<option value="beginner">Beginner</option>
								<option value="intermediate">Intermediate</option>
								<option value="advanced">Advanced</option>
							</select>
						</InputBox>
						<InputBox>
							<FormControlLabel
								control={
									<Checkbox defaultChecked={courseInfo.scholarshipAvailable} />
								}
								label="Scholarship Available"
								sx={{ width: "100%" }}
								{...register("scholarshipAvailable")}
							/>
						</InputBox>
					</Box>

					{/* Right Column ends */}
				</Box>
				<Button
					type="submit"
					variant="contained"
					size="small"
					sx={{ display: "block", margin: "20px 0 0px auto" }}
				>
					Edit
				</Button>
			</form>
			{/* )} */}
		</div>
	);
}

export default EditCourse;
