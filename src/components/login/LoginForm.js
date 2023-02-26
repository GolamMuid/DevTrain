import styled from "@emotion/styled";
import {
	Box,
	Button,
	FormHelperText,
	IconButton,
	InputAdornment,
	Link,
	OutlinedInput,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Toast from "../../layouts/toast/Toast";
import { BeatLoader } from "react-spinners";

const InputBox = styled(Box)(({ theme }) => ({
	marginBottom: "20px",
}));

function LoginForm() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const navigate = useNavigate();

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
				"https://devtrain.cyclic.app/api/v1/auth/login",
				data
			);
			console.log(response);
			if (response?.data?.success) {
				navigate("/");
				setLoading(false);
				window.localStorage.setItem(
					"DevTrain-Token",
					JSON.stringify(response.data.token)
				);
			} else {
				alert("falied");
				setLoading(false);
			}
		} catch (error) {
			setSnackbarState({
				state: true,
				type: "error",
				message: "Invalid Credentials",
			});
			setLoading(false);
		}
	};

	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	return (
		<Box>
			<Typography variant="h5" textAlign="center" padding="20px 0 10px">
				Login
			</Typography>
			<form onSubmit={handleSubmit(onSubmit)}>
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
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									edge="end"
								>
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
							Course is required
						</FormHelperText>
					)}
				</InputBox>
				<InputBox>
					<Box>
						Forgot Password? <br />
						<Link href="/" underline="none">
							Click to Reset Password
						</Link>
					</Box>
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
						Login
					</Button>
				)}
			</form>
			<Toast snackbarState={snackbarState} close={close} />
		</Box>
	);
}

export default LoginForm;
