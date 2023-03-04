import {
	Button,
	Dialog,
	DialogContent,
	IconButton,
	Slide,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BeatLoader } from "react-spinners";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

function DeleteBootcamp({
	viewDeleteBootcamp,
	setViewDeleteBootcamp,
	bootcampData,
}) {
	const handleClose = () => setViewDeleteBootcamp(false);

	const [loading, setLoading] = useState(false);

	return (
		<Dialog
			open={viewDeleteBootcamp}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			maxWidth="md"
		>
			<Box
				display="flex"
				alignItems="center"
				justifyContent="space-between"
				padding="20px"
			>
				<Typography variant="h5">Delete Course</Typography>
				<IconButton onClick={handleClose}> {<RxCross2 />} </IconButton>
			</Box>

			<DialogContent>
				<Box>Do you want to delete the Bootcamp {bootcampData?.name} ?</Box>
				<Box display="flex" justifyContent="end" gap="20px" marginTop="40px">
					<Button onClick={handleClose}> Cancel </Button>
					{loading ? (
						<Button variant="contained">
							<BeatLoader size={13} color="#fff" />
						</Button>
					) : (
						<Button variant="contained">Confirm</Button>
					)}
				</Box>
			</DialogContent>
		</Dialog>
	);
}

export default DeleteBootcamp;
