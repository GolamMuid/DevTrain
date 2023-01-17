import { Box } from "@mui/system";
import React, { Children } from "react";

function Container({ children }) {
	return (
		<Box
			maxWidth={{ sm: "580px", md: "768px", lg: "1080px" }}
			border="2px solid black"
			margin="auto"
		>
			{children}
		</Box>
	);
}

export default Container;
