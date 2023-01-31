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
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

// Custom Components

const InputBox = styled(Box)(({ theme }) => ({
	marginBottom: "20px",
}));

// Custom Components

function AddCourse({ addCourse, setAddCourse }) {
	const handleClose = () => setAddCourse(false);

	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<Dialog
			open={addCourse}
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
				<Typography variant="h5">Add Course</Typography>
				<IconButton onClick={handleClose}> {<RxCross2 />} </IconButton>
			</Box>

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
									{...register("title", {
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
									{...register("weeks", { required: "Duration is required" })}
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
								<Typography variant="body1">
									Minimum Skill Required :
								</Typography>
								<Controller
									name="minimumSkill"
									defaultValue=""
									control={control}
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
									control={<Checkbox />}
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
		</Dialog>
	);
}

export default AddCourse;
