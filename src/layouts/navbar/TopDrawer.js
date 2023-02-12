import styled from "@emotion/styled";
import { Drawer, FormControlLabel, List, ListItem } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ModeContext from "../../contexts/ModeContext";
import { MaterialUISwitch } from "./Navbar";

const ListContainer = styled(List)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "end",
	"& li": {
		width: "fit-content",
		margin: "auto",
	},
}));

function TopDrawer({ drawerState, setDrawerState }) {
	const { handleDarkMode, darkMode } = useContext(ModeContext);

	return (
		<Drawer
			anchor="top"
			open={drawerState}
			onClose={() => {
				setDrawerState(false);
			}}
			sx={{ zIndex: "5" }}
		>
			<Box paddingTop="60px">
				<ListContainer>
					<ListItem>
						<Link to="/bootcamps">Browse Bootcamp </Link>
					</ListItem>
					<ListItem> Profile </ListItem>
					<ListItem>
						<FormControlLabel
							onChange={handleDarkMode}
							checked={darkMode}
							control={<MaterialUISwitch />}
						/>
					</ListItem>
				</ListContainer>
			</Box>
		</Drawer>
	);
}

export default TopDrawer;
