import { Box } from "@mui/material";
import React from "react";
import BootcampInfo from "../../components/profile/BootcampInfo";
import UserDetail from "../../components/profile/UserDetail";
import Container from "../../layouts/container/Container";

function ProfilePage() {
	return (
		<Container>
			<Box display="flex" flexDirection="column" gap="40px">
				<UserDetail />
				<BootcampInfo />
			</Box>
		</Container>
	);
}

export default ProfilePage;
