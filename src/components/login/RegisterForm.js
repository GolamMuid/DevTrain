import styled from "@emotion/styled";
import {
	Box,
	Button,
	FormControl,
	FormControlLabel,
	FormHelperText,
	IconButton,
	InputAdornment,
	OutlinedInput,
	Radio,
	RadioGroup,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

const InputBox = styled(Box)(({ theme }) => ({
	marginBottom: "20px",
}));

function RegisterForm() {
	const {
		register,
		formState: { errors },
		watch,
		getValues,
		handleSubmit,
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	const [showPassword, setShowPassword] = useState(false);
	const [showCPassword, setShowCPassword] = useState(false);

	const handleClickShowPassword = () =>
		setShowPassword((showPassword) => !showPassword);
	const handleClickShowCPassword = () =>
		setShowCPassword((showCPassword) => !showCPassword);

	return (
		<Box padding="20px">
			<Typography variant="h4" textAlign="center" padding="10px">
				Register
			</Typography>
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputBox>
					<Typography variant="body1">Name :</Typography>
					<TextField
						fullWidth
						size="small"
						placeholder="Full Name"
						{...register("name", { required: "Name is required" })}
						error={Boolean(errors.name)}
						helperText={errors.name?.message}
					/>
				</InputBox>
				<InputBox>
					<Typography variant="body1">Email :</Typography>
					<TextField
						fullWidth
						size="small"
						placeholder="Email Address"
						{...register("email", { required: "Email is required" })}
						error={Boolean(errors.email)}
						helperText={errors.email?.message}
					/>
				</InputBox>
				<InputBox>
					<Typography variant="body1">Password :</Typography>
					<OutlinedInput
						fullWidth
						size="small"
						placeholder="Password"
						type={showPassword ? "text" : "password"}
						endAdornment={
							<InputAdornment position="end">
								<IconButton onClick={handleClickShowPassword} edge="end">
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						{...register("password", {
							required: "Password is required",
						})}
						error={Boolean(errors.password)}
					/>
					{errors?.password?.type === "required" && (
						<FormHelperText sx={{ marginLeft: "16px", color: "error.main" }}>
							Password is required
						</FormHelperText>
					)}
				</InputBox>
				<InputBox>
					<Typography variant="body1">Confirm Password :</Typography>
					<OutlinedInput
						fullWidth
						size="small"
						placeholder="Password"
						type={showCPassword ? "text" : "password"}
						endAdornment={
							<InputAdornment position="end">
								<IconButton onClick={handleClickShowCPassword} edge="end">
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						{...register("cpassword", {
							required: "Confirm Password is required",
						})}
						error={Boolean(errors.cpassword)}
					/>
					{errors?.password?.type === "required" && (
						<FormHelperText sx={{ marginLeft: "16px", color: "error.main" }}>
							Confirm Password is required
						</FormHelperText>
					)}

					{watch("cpassword") !== watch("password") &&
					getValues("cpassword") ? (
						<FormHelperText sx={{ marginLeft: "16px", color: "error.main" }}>
							Paswords do not match
						</FormHelperText>
					) : null}
				</InputBox>
				<InputBox>
					<FormControl>
						<Typography variant="body1">User Role :</Typography>
						<RadioGroup row defaultValue="user">
							<FormControlLabel
								value="user"
								control={<Radio />}
								label="User"
								{...register("role")}
							/>
							<FormControlLabel
								value="publisher"
								control={<Radio />}
								label="Publisher"
								{...register("role")}
							/>
						</RadioGroup>
					</FormControl>
				</InputBox>
				<Button
					type="submit"
					variant="contained"
					sx={{ margin: "auto", display: "block" }}
				>
					Register
				</Button>
			</form>
		</Box>
	);
}

export default RegisterForm;
