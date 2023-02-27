import {
	Avatar,
	Button,
	Paper,
	Skeleton,
	TextField,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Toast from "../../layouts/toast/Toast";
import UserEdit from "./UserEdit";

function UserDetail() {
	let TOKEN = localStorage.getItem("DevTrain-Token").replace(/['"]+/g, "");

	const [loading, setLoading] = useState(false);

	const [userInfo, setUserInfo] = useState({});

	const getData = async () => {
		setLoading(true);
		try {
			const response = await axios.get(
				`https://devtrain.cyclic.app/api/v1/auth/me`,
				{
					headers: {
						Authorization: `Bearer ${TOKEN}`,
					},
				}
			);
			setUserInfo(response.data.data);
			setLoading(false);
		} catch (error) {
			console.error(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	const [field, setField] = useState("view");
	const [editLoading, setEditLoading] = useState(false);
	const [snackbarState, setSnackbarState] = useState({
		state: false,
		type: "info",
		message: "",
	});

	const close = () => setSnackbarState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		console.log(data);
		const TOKEN = localStorage.getItem("DevTrain-Token").replace(/['"]+/g, "");
		setEditLoading(true);
		try {
			const response = await axios.put(
				"https://devtrain.cyclic.app/api/v1/auth/updatedetails",
				data,
				{
					headers: {
						Authorization: `Bearer ${TOKEN}`,
					},
				}
			);
			console.log(response);
			if (response?.data?.success) {
				setEditLoading(false);
				setSnackbarState({
					state: true,
					type: "success",
					message: "Profile Updated Successfully",
				});
				getData();
			} else {
				setSnackbarState({
					state: true,
					type: "error",
					message: response.data.error,
				});
				setEditLoading(false);
			}
		} catch (error) {
			setSnackbarState({
				state: true,
				type: "error",
				message: "Something went wrong, try again",
			});
			console.log(error);
			setEditLoading(false);
		}
	};

	return (
		<Paper sx={{ padding: "20px" }}>
			<Box display="grid" gridTemplateColumns={{ sx: "1fr", md: "1fr 1fr" }}>
				<Box>
					<Avatar
						alt="Remy Sharp"
						src="/assets/images/robot.png"
						sx={{ width: 200, height: 200, margin: "auto" }}
					/>
				</Box>

				{field === "edit" && (
					<UserEdit
						userInfo={userInfo}
						setEditLoading={setEditLoading}
						setSnackbarState={setSnackbarState}
						getData={getData}
						editLoading={editLoading}
						setField={setField}
					/>
				)}

				{field === "view" && (
					<Box>
						<Typography variant="h6"> Name : </Typography>
						{loading && <Skeleton height="24px" />}
						<Typography variant="body1"> {userInfo.name} </Typography>
						<Typography variant="h6"> Email : </Typography>
						{loading && <Skeleton height="24px" />}
						<Typography variant="body1"> {userInfo.email} </Typography>
						<Typography variant="h6"> Account Type : </Typography>
						{loading && <Skeleton height="24px" />}
						<Typography variant="body1"> {userInfo.role} </Typography>
						<Box
							display="flex"
							justifyContent="end"
							gap="20px"
							marginTop="20px"
						>
							<Button variant="contained" onClick={() => setField("edit")}>
								Edit Profile
							</Button>
							<Button variant="contained" onClick={() => setField("editPass")}>
								Edit Password
							</Button>
						</Box>
					</Box>
				)}
			</Box>
			<Toast snackbarState={snackbarState} close={close} />
		</Paper>
	);
}

export default UserDetail;
