import styled from "@emotion/styled";
import {
	Box,
	Button,
	Card,
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableRow,
	Typography,
} from "@mui/material";
import React from "react";
import Container from "../../layouts/container/Container";
import { RiEditLine } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import EditBootcamp from "./EditBootcamp";
import AddCourse from "./AddCourse";
import EditCourse from "./EditCourse";

// Custom Components

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	td: {
		fontSize: "1rem",
	},
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));

// Custom Components

function ManageBootcamp() {
	// States for Modals

	const [editBootcamp, setEditBootcamp] = useState(false);
	const [addCourse, setAddCourse] = useState(false);
	const [editCourse, setEditCourse] = useState(false);

	// States for Modals

	return (
		<Container>
			<Box
				display="grid"
				gridTemplateColumns={{ xs: "1fr", md: "3fr 2fr" }}
				gap="20px"
			>
				<Box padding={{ xs: "0px 20px", md: "0" }} marginBottom="20px">
					<Typography variant="h4" style={{ padding: "20px 0" }}>
						DevWorks Bootcamp
					</Typography>
					<Box>
						<img
							src={`${process.env.PUBLIC_URL}/assets/images/class.jpg`}
							alt="Bootcamp"
							style={{
								objectFit: "contain",
								height: "100%",
								width: "100%",
								maxHeight: "300px",
								padding: "20px 0",
								margin: "auto",
							}}
						/>
					</Box>

					<Typography variant="body1" style={{ padding: "10px 0" }}>
						Devworks is a full stack JavaScript Bootcamp located in the heart of
						Boston that focuses on the technologies you need to get a high
						paying job as a web developer
					</Typography>
					<Box padding="20px 0">
						<Table size="small">
							<TableBody>
								<StyledTableRow>
									<TableCell> Average Cost per course </TableCell>
									<TableCell align="right"> $50 </TableCell>
								</StyledTableRow>
								<StyledTableRow>
									<TableCell> Total Cost </TableCell>
									<TableCell align="right"> $50 </TableCell>
								</StyledTableRow>
								<StyledTableRow>
									<TableCell> Housing </TableCell>
									<TableCell align="right"> Yes </TableCell>
								</StyledTableRow>
								<StyledTableRow>
									<TableCell> Job Assistance </TableCell>
									<TableCell align="right"> No </TableCell>
								</StyledTableRow>
								<StyledTableRow>
									<TableCell> Job Gurantee </TableCell>
									<TableCell align="right"> Yes </TableCell>
								</StyledTableRow>
								<StyledTableRow>
									<TableCell> Accepts GI Bill </TableCell>
									<TableCell align="right"> Yes </TableCell>
								</StyledTableRow>
							</TableBody>
						</Table>
					</Box>
					<Button
						variant="contained"
						sx={{ margin: "auto", display: "block" }}
						onClick={() => setEditBootcamp(true)}
					>
						Edit Bootcamp
					</Button>
				</Box>
				<Card
					sx={{
						height: "fit-content",
						margin: { xs: "0px 20px 20px", md: "0" },
					}}
				>
					<Typography
						variant="h5"
						sx={{
							padding: "10px 20px",
							backgroundColor: "primary.main",
							borderTopLeftRadius: "6px",
							borderTopRightRadius: "6px",
						}}
					>
						Courses
					</Typography>
					<Box padding="10px">
						<Typography variant="h6" textAlign="center" padding="20px">
							You haven't added any course yet
						</Typography>

						<Box
							display="flex"
							alignItems="center"
							justifyContent="space-between"
							gap="20px"
						>
							<Typography variant="h6">Front End Web Development</Typography>
							<Box display="flex">
								<IconButton
									color="infoBlue"
									onClick={() => setEditCourse(true)}
								>
									{" "}
									{<RiEditLine />}{" "}
								</IconButton>
								<IconButton color="error"> {<MdDeleteOutline />} </IconButton>
							</Box>
						</Box>
						<Box
							display="flex"
							alignItems="center"
							justifyContent="space-between"
							gap="20px"
						>
							<Typography variant="h6">Full Stack Web Development</Typography>
							<Box display="flex">
								<IconButton color="infoBlue"> {<RiEditLine />} </IconButton>
								<IconButton color="error"> {<MdDeleteOutline />} </IconButton>
							</Box>
						</Box>
						<Box padding="20px 20px 10px">
							<Button
								variant="contained"
								sx={{ margin: "auto", display: "block" }}
								onClick={() => setAddCourse(true)}
							>
								Add Course
							</Button>
						</Box>
					</Box>
				</Card>
			</Box>
			<EditBootcamp
				editBootcamp={editBootcamp}
				setEditBootcamp={setEditBootcamp}
			/>
			<AddCourse addCourse={addCourse} setAddCourse={setAddCourse} />
			<EditCourse editCourse={editCourse} setEditCourse={setEditCourse} />
		</Container>
	);
}

export default ManageBootcamp;
