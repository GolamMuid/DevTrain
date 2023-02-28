import { Box, Button, Skeleton, Typography } from "@mui/material";
import React from "react";

function UserInfo(props) {
	const { userInfo, setField, loading } = props;
	return (
		<Box>
			<Typography variant="h6"> Name : </Typography>
			{loading && <Skeleton height="24px" />}
			<Typography variant="body1" sx={{ marginBottom: "10px" }}>
				{userInfo.name}
			</Typography>
			<Typography variant="h6"> Email : </Typography>
			{loading && <Skeleton height="24px" />}
			<Typography variant="body1" sx={{ marginBottom: "10px" }}>
				{userInfo.email}
			</Typography>
			<Typography variant="h6"> Account Type : </Typography>
			{loading && <Skeleton height="24px" />}
			<Typography variant="body1" textTransform="capitalize">
				{userInfo.role}
			</Typography>
			<Box display="flex" justifyContent="end" gap="20px" marginTop="20px">
				<Button variant="contained" onClick={() => setField("edit")}>
					Edit Profile
				</Button>
				<Button variant="contained" onClick={() => setField("editPass")}>
					Edit Password
				</Button>
			</Box>
		</Box>
	);
}

export default UserInfo;
