import { Alert, Snackbar } from "@mui/material";
import React from "react";

function Toast({ snackbarState, close }) {
	return (
		<Snackbar
			open={snackbarState?.state}
			autoHideDuration={6000}
			onClose={close}
			anchorOrigin={{
				vertical: "top",
				horizontal: "center",
			}}
		>
			<Alert variant="filled" onClose={close} severity={snackbarState?.type}>
				{snackbarState?.message}
			</Alert>
		</Snackbar>
	);
}

export default Toast;
