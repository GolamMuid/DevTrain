import { Avatar, Button, Paper, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";

function UserDetail() {
	let TOKEN = localStorage.getItem("DevTrain-Token").replace(/['"]+/g, "");

	const [loading, setLoading] = useState(false);

	const [userInfo, setUserInfo] = useState({});

	console.log(TOKEN);
	console.log(userInfo);

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

	return (
		<Paper sx={{ padding: "20px" }}>
			<Box display="flex" alignItems="center" justifyContent="space-around">
				<Box>
					<Avatar
						alt="Remy Sharp"
						src="/assets/images/robot.png"
						sx={{ width: 200, height: 200 }}
					/>
				</Box>
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
				</Box>
			</Box>
			<Box display="flex" justifyContent="end">
				<Button variant="contained"> Edit Profile </Button>
			</Box>
		</Paper>
	);
}

export default UserDetail;
