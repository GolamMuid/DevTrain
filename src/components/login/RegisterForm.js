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
import axios from "axios";
import { BeatLoader } from "react-spinners";
import Toast from "../../layouts/toast/Toast";

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

	const [loading, setLoading] = useState(false);

	const [snackbarState, setSnackbarState] = useState({
		state: false,
		type: "info",
		message: "",
	});

	const close = () => setSnackbarState(false);

	const onSubmit = async (data) => {
		setLoading(true);
		try {
			const response = await axios.post(
				"https://devtrain.cyclic.app/api/v1/auth/register",
				data
			);
			console.log(response);
			if (response?.data?.success) {
				setSnackbarState({
					state: true,
					type: "success",
					message: "Registration Successful",
				});
				setLoading(false);
			} else {
				setSnackbarState({
					state: true,
					type: "error",
					message: "Something went wrong",
				});
				setLoading(false);
			}
		} catch (error) {
			console.log(error?.response);
			setLoading(false);
		}
	};

	const [showPassword, setShowPassword] = useState(false);
	const [showCPassword, setShowCPassword] = useState(false);

	const handleClickShowPassword = () =>
		setShowPassword((showPassword) => !showPassword);
	const handleClickShowCPassword = () =>
		setShowCPassword((showCPassword) => !showCPassword);

	return (
		<Box>
			<Typography variant="h5" textAlign="center" padding="20px 0 10px">
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
				{loading ? (
					<Button variant="contained" sx={{ margin: "auto", display: "block" }}>
						<BeatLoader size={13} color="#fff" />
					</Button>
				) : (
					<Button
						type="submit"
						variant="contained"
						sx={{ margin: "auto", display: "block" }}
					>
						Register
					</Button>
				)}
			</form>
			<Toast snackbarState={snackbarState} close={close} />
		</Box>
	);
}

export default RegisterForm;
