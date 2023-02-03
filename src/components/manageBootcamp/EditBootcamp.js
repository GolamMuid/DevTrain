import styled from "@emotion/styled";
import {
	Button,
	Dialog,
	DialogContent,
	Slide,
	Checkbox,
	FormControlLabel,
	Switch,
	TextField,
	Typography,
	Box,
	IconButton,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

// Custom Components

const InputBox = styled(Box)(({ theme }) => ({
	marginBottom: "20px",
}));

const GridBox = styled(Box)(({ theme }) => ({
	marginBottom: "6px",
	display: "grid",
	gridTemplateColumns: "1fr 1fr",
	gap: "20px",
	alignItems: "center",
}));

// Custom Components

function EditBootcamp({ editBootcamp, setEditBootcamp }) {
	const handleClose = () => setEditBootcamp(false);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<Dialog
			open={editBootcamp}
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
				<Typography variant="h5">Edit Bootcamp</Typography>
				<IconButton onClick={handleClose}> {<RxCross2 />} </IconButton>
			</Box>

			<DialogContent>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Box
						display="grid"
						gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
						gap="20px"
						maxHeight="65vh"
						overflow="auto"
						position="relative"
					>
						{/* Left Column starts */}

						<Box padding="20px">
							<InputBox>
								<Typography variant="body1">Name :</Typography>
								<TextField
									fullWidth
									size="small"
									placeholder="Bootcamp Name"
									{...register("name", { required: "Name is required" })}
									error={Boolean(errors.name)}
									helperText={errors.name?.message}
								/>
							</InputBox>
							<InputBox>
								<Typography variant="body1">Description :</Typography>
								<TextField
									fullWidth
									size="small"
									multiline
									rows={4}
									placeholder="Description (What you offer, Basic idea about the bootcamp etc) 500 characters max"
									{...register("description", { maxLength: 500 })}
									error={Boolean(errors.description)}
									helperText={
										errors.description &&
										"Description cannot be more than 500 characters"
									}
								/>
							</InputBox>

							<InputBox>
								<Typography variant="body1">Contact Number :</Typography>
								<TextField
									type="number"
									fullWidth
									size="small"
									placeholder="Phone / Mobile"
									{...register("contactNo", {
										minLength: 6,
										maxLength: 12,
										message: "Insert a valid phone number",
									})}
									error={Boolean(errors.contactNo)}
									helperText={
										errors.contactNo ? "Insert a valid phone number" : ""
									}
								/>
							</InputBox>
							<InputBox>
								<Typography variant="body1">Email :</Typography>
								<TextField
									fullWidth
									size="small"
									placeholder="Contact Email"
									{...register("email", { pattern: /^\S+@\S+$/i })}
									error={Boolean(errors.email)}
									helperText={
										errors.email ? "Insert a valid email address" : ""
									}
								/>
							</InputBox>
							<InputBox>
								<Typography variant="body1">Website :</Typography>
								<TextField
									fullWidth
									size="small"
									placeholder="Website URL"
									{...register("website")}
								/>
							</InputBox>
						</Box>

						{/* Left Column ends */}

						{/* Right Column starts */}

						<Box padding="20px">
							<InputBox>
								<Typography variant="body1">Careers :</Typography>
								<Box display="flex" justifyContent="space-between">
									<Box>
										<FormControlLabel
											control={<Checkbox />}
											label="Web Development"
											value="Web Development"
											sx={{ width: "100%" }}
											{...register("careers")}
										/>
										<FormControlLabel
											control={<Checkbox />}
											label="Mobile Development"
											value="Mobile Development"
											sx={{ width: "100%" }}
											{...register("careers")}
										/>
										<FormControlLabel
											control={<Checkbox />}
											label="UI/UX"
											value="UI/UX"
											sx={{ width: "100%" }}
											{...register("careers")}
										/>
									</Box>
									<Box>
										<FormControlLabel
											control={<Checkbox />}
											label="Data Science"
											value="Data Science"
											sx={{ width: "100%" }}
											{...register("careers")}
										/>
										<FormControlLabel
											control={<Checkbox />}
											label="Business"
											value="Business"
											sx={{ width: "100%" }}
											{...register("careers")}
										/>
										<FormControlLabel
											control={<Checkbox />}
											label="Other"
											value="Other"
											sx={{ width: "100%" }}
											{...register("careers")}
										/>
									</Box>
								</Box>
							</InputBox>
							<GridBox>
								<Typography variant="body1">Housing</Typography>
								<FormControlLabel
									control={<Switch name="housing" {...register("housing")} />}
								/>
							</GridBox>
							<GridBox>
								<Typography variant="body1">Job Assistance</Typography>
								<FormControlLabel
									control={
										<Switch
											name="jobAssistance"
											{...register("jobAssistance")}
										/>
									}
								/>
							</GridBox>
							<GridBox>
								<Typography variant="body1">Job Guarantee</Typography>
								<FormControlLabel
									control={
										<Switch name="jobGuarantee" {...register("jobGuarantee")} />
									}
								/>
							</GridBox>
							<GridBox>
								<Typography variant="body1">Accepts GI Bill</Typography>
								<FormControlLabel
									control={<Switch name="acceptGi" {...register("acceptGi")} />}
								/>
							</GridBox>
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

export default EditBootcamp;
