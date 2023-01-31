import styled from "@emotion/styled";
import {
	Button,
	Checkbox,
	FormControlLabel,
	Switch,
	TextField,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import Container from "../../layouts/container/Container";

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

function AddBootcamp() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<Container>
			<Typography variant="h4" sx={{ padding: "20px" }}>
				Add Bootcamp
			</Typography>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Box
					display="grid"
					gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
					gap="20px"
				>
					{/* Left Column starts */}

					<Box padding="20px">
						<Typography variant="h5" sx={{ marginBottom: "16px" }}>
							Location & Contact
						</Typography>
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
							<Typography variant="body1">Address :</Typography>
							<TextField
								fullWidth
								size="small"
								multiline
								rows={4}
								placeholder="Full Address eg. street, city, state, etc"
								{...register("address", { required: "Address is required" })}
								error={Boolean(errors.address)}
								helperText={errors.address?.message}
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
								helperText={errors.email ? "Insert a valid email address" : ""}
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
						<Typography variant="h5" sx={{ marginBottom: "16px" }}>
							Other Info
						</Typography>
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
									<Switch name="jobAssistance" {...register("jobAssistance")} />
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
				<Typography variant="body2" padding="20px" fontStyle="italic">
					You can publish only one bootcamp. You can add multiple coureses in
					that bootcamp.
				</Typography>
				<Button
					type="submit"
					variant="contained"
					size="large"
					sx={{ display: "block", margin: "10px auto 20px" }}
				>
					Submit
				</Button>
			</form>
		</Container>
	);
}

export default AddBootcamp;
