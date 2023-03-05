import { Avatar, Paper, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";

import Toast from "../../layouts/toast/Toast";
import BootcampInfo from "./BootcampInfo";
import EnrollmentInfo from "./EnrollmentInfo";
import UserEdit from "./UserEdit";
import UserInfo from "./UserInfo";
import UserPasswordEdit from "./UserPasswordEdit";

function UserDetail() {
	let TOKEN = localStorage.getItem("DevTrain-Token").replace(/['"]+/g, "");

	const [loading, setLoading] = useState(false);

	const [userInfo, setUserInfo] = useState({});
	console.log("🚀 ~ file: UserDetail.js:18 ~ UserDetail ~ userInfo:", userInfo);

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

	const [snackbarState, setSnackbarState] = useState({
		state: false,
		type: "info",
		message: "",
	});

	const close = () => setSnackbarState(false);

	return (
		<Box
			display="flex"
			flexDirection="column"
			gap="40px"
			margin={{ xs: "0 20px", md: "0" }}
		>
			<Paper sx={{ padding: "20px" }}>
				<Box display="grid" gridTemplateColumns={{ sx: "1fr", md: "1fr 1fr" }}>
					<Box>
						<Avatar
							alt="Remy Sharp"
							src="/assets/images/robot.png"
							sx={{ width: 200, height: 200, margin: "auto" }}
						/>
					</Box>

					{field === "view" && (
						<UserInfo
							userInfo={userInfo}
							setField={setField}
							loading={loading}
						/>
					)}

					{field === "edit" && (
						<UserEdit
							userInfo={userInfo}
							setSnackbarState={setSnackbarState}
							getData={getData}
							setField={setField}
						/>
					)}

					{field === "editPass" && (
						<UserPasswordEdit
							setField={setField}
							setSnackbarState={setSnackbarState}
						/>
					)}
				</Box>
				<Toast snackbarState={snackbarState} close={close} />
			</Paper>
			{loading ? (
				<Skeleton height="100px" />
			) : (
				<>
					{" "}
					{userInfo?.role === "publisher" ? (
						<BootcampInfo userInfo={userInfo} />
					) : userInfo?.role === "user" ? (
						<EnrollmentInfo userInfo={userInfo} />
					) : (
						<> </>
					)}
				</>
			)}
		</Box>
	);
}

export default UserDetail;
