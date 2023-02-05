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
import { Stack } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const InputBox = styled(Box)(({ theme }) => ({
	marginBottom: "20px",
}));

function LoginForm() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	return (
		<Box>
			<Typography variant="h4" textAlign="center" padding="20px 0 10px">
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
				<Button
					type="submit"
					variant="contained"
					sx={{ margin: "auto", display: "block" }}
				>
					Login
				</Button>
			</form>
		</Box>
	);
}

export default LoginForm;
