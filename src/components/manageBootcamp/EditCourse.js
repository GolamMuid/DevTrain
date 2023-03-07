import styled from "@emotion/styled";
import {
	Button,
	Dialog,
	DialogContent,
	Slide,
	Checkbox,
	FormControlLabel,
	TextField,
	Typography,
	Box,
	IconButton,
	InputAdornment,
	OutlinedInput,
	MenuItem,
	FormHelperText,
} from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import useFetch from "../../hooks/useFetch";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

// Custom Components

const InputBox = styled(Box)(({ theme }) => ({
	marginBottom: "20px",
}));

// Custom Components

function EditCourse({ viewEditCourse, setViewEditCourse, courseInfo }) {
	const TOKEN = localStorage.getItem("DevTrain-Token").replace(/['"]+/g, "");
	const [course, setCourse] = useState(courseInfo);
	useEffect(() => {
		setCourse(courseInfo);
	}, [courseInfo]);

	console.log("🚀 ~ file: EditCourse.js:38 ~ EditCourse ~ course:", course);
	// console.log("🚀 ~ file: EditCourse.js:38 ~ EditCourse ~ course:", courseInfo);

	// const [courseData, isLoading, , , , refetch] = useFetch(
	// 	`https://devtrain.cyclic.app/api/v1/courses/${courseInfo?._id}`,
	// 	"courseData"
	// );

	// useEffect(() => {
	// 	refetch();
	// }, [viewEditCourse]);

	// useEffect(() => {
	// 	setCourse(courseData);
	// }, [courseData]);

	const [loading, setLoading] = useState(false);

	const handleClose = () => setViewEditCourse(false);
	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
	} = useForm();

	const onSubmit = async (data) => {
		setLoading(true);

		try {
			const response = await axios.put(
				`https://devtrain.cyclic.app/api/v1/courses/${courseInfo?._id}`,
				course,
				{
					headers: {
						Authorization: `Bearer ${TOKEN}`,
					},
				}
			);
			console.log(response);
			if (response?.data?.success) {
				setLoading(false);
				handleClose();
			} else {
				console.log(response);
			}
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	return (
		<Dialog
			open={viewEditCourse}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			maxWidth="lg"
		>
			<Box
				display="flex"
				alignItems="center"
				justifyContent="space-between"
				padding="20px"
			>
				<Typography variant="h5">Edit Course</Typography>
				<IconButton onClick={handleClose}> {<RxCross2 />} </IconButton>
			</Box>

			{/* {isLoading ? (
				<PuffLoader />
			) : ( */}
			<DialogContent>
				<form onSubmit={handleSubmit(onSubmit)}>
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
							<InputBox>
								<Typography variant="body1">Course Title :</Typography>
								<TextField
									fullWidth
									size="small"
									placeholder="Course Title"
									defaultValue={course?.title}
									{...register("title", {
										onChange: (e) => {
											setCourse({ ...course, title: e.target.value });
										},
										required: "Course Title is required",
									})}
									error={Boolean(errors.title)}
									helperText={errors.title?.message}
								/>
							</InputBox>
							<InputBox>
								<Typography variant="body1">Duration :</Typography>
								<TextField
									fullWidth
									size="small"
									placeholder="Number of weeks"
									value={course?.weeks}
									{...register("weeks", {
										onChange: (e) => {
											setCourse({ ...course, weeks: e.target.value });
										},
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
									value={course?.tuition}
									startAdornment={
										<InputAdornment position="start">$</InputAdornment>
									}
									placeholder="Tuition in USD"
									{...register("tuition", {
										onChange: (e) => {
											setCourse({ ...course, tuition: e.target.value });
										},
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
									value={course.description}
									placeholder="Basic information about the course within 500 characters"
									{...register("description", {
										onChange: (e) => {
											setCourse({ ...course, description: e.target.value });
										},
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
								<Typography variant="body1">
									Minimum Skill Required :
								</Typography>
								<Controller
									name="minimumSkill"
									value="beginner"
									control={control}
									onChange={(e) => {
										setCourse({ ...course, description: e.target.value });
									}}
									render={({ field }) => (
										<TextField
											select
											{...field}
											fullWidth
											error={errors?.minimumSkill}
											size="small"
										>
											<MenuItem value="beginner">Beginner</MenuItem>
											<MenuItem value="intermediate">Intermediate</MenuItem>
											<MenuItem value="advanced">Advanced</MenuItem>
										</TextField>
									)}
									rules={{ required: true }}
								/>

								{errors?.minimumSkill?.type === "required" && (
									<FormHelperText sx={{ color: "red" }}>
										Minimum Skill is required{" "}
									</FormHelperText>
								)}
							</InputBox>
							<InputBox>
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={courseInfo.scholarshipAvailable}
										/>
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
			</DialogContent>
			{/* )} */}
		</Dialog>
	);
}

export default EditCourse;
