import {
	Card,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Skeleton,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Container from "../../layouts/container/Container";
import CourseModel from "./CourseModel";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import ReviewModel from "./ReviewModel";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Bootcamp() {
	const { slug } = useParams();
	const lastHyphenIndex = slug.lastIndexOf("-");
	const id = slug.substring(lastHyphenIndex + 1);

	const [data, isLoading, isError, error, isSuccess, refetch] = useFetch(
		`https://devtrain.cyclic.app/api/v1/bootcamps/${id}`,
		"bootcamps"
	);

	const [reviews, reviewLoading, reviewError] = useFetch(
		`https://devtrain.cyclic.app/api/v1/bootcamps/${id}/reviews`,
		"reviews"
	);

	const [courses, courseLoading, courseError] = useFetch(
		`https://devtrain.cyclic.app/api/v1/bootcamps/${id}/courses`,
		"courses"
	);

	console.log(data);

	return (
		<Container>
			<Box
				display="grid"
				gridTemplateColumns={{ xs: "1fr", md: "2fr 1fr" }}
				gap="20px"
			>
				<Box padding={{ xs: "0px 10px", md: "0" }}>
					<Box display="flex" alignItems="center" justifyContent="center">
						<img
							src={`${process.env.PUBLIC_URL}/assets/images/class.jpg`}
							alt="Bootcamp"
							style={{
								objectFit: "contain",
								height: "100%",
								width: "100%",
								maxHeight: "300px",
							}}
						/>
					</Box>
					<Typography variant="h4" style={{ padding: "20px 0" }}>
						{isLoading && <Skeleton height="50px" />}
						{data?.name}
					</Typography>
					<Typography variant="body1" style={{ padding: "10px 0" }}>
						{isLoading && <Skeleton height="70px" />}
						{data?.description}
					</Typography>
					{courseLoading && <Skeleton height="480px" />}
					{courses?.map((course) => {
						return (
							<CourseModel
								key={course.id}
								title={course.title}
								description={course.description}
								tuition={course.tuition}
								minimumSkill={course.minimumSkill}
								scholarshipAvailable={course.scholarshipAvailable}
								weeks={course.weeks}
							/>
						);
					})}
				</Box>
				<Box margin={{ xs: "0 10px", md: "0" }}>
					<Card sx={{ padding: "10px" }}>
						{isLoading ? (
							<Skeleton height="150px" />
						) : (
							<Box>
								<Typography variant="h6" textAlign="center" color="primary">
									Location:
								</Typography>
								<Typography
									variant="body2"
									textAlign="center"
									marginBottom="10px"
								>
									{data?.location?.formattedAddress}
								</Typography>
								<Typography variant="h6" textAlign="center" color="primary">
									Average cost per course:
								</Typography>
								<Typography variant="h6" textAlign="center">
									${data?.averageCost}
								</Typography>
								<Typography variant="h6" textAlign="center" color="primary">
									Total Cost:
								</Typography>
								<Typography variant="h6" textAlign="center">
									$10000
								</Typography>
							</Box>
						)}
						{isLoading ? (
							<Skeleton height="200px" />
						) : (
							<Box padding="20px 30px 0">
								<Typography variant="h6" textAlign="center" color="primary">
									Career Paths:
								</Typography>
								<List dense={true}>
									{data?.careers.map((career) => {
										return (
											<ListItem>
												<ListItemIcon>
													<DoubleArrowIcon color="primary" />
												</ListItemIcon>
												<ListItemText primary={career} />
											</ListItem>
										);
									})}
								</List>
							</Box>
						)}
						{isLoading ? (
							<Skeleton height="200px" />
						) : (
							<Box padding="20px 30px 0">
								<Typography variant="h6" textAlign="center" color="primary">
									Facilities:
								</Typography>
								<List dense={true}>
									<ListItem>
										<ListItemIcon>
											{data?.housing ? (
												<DoneIcon color="success" />
											) : (
												<CloseIcon color="error" />
											)}
										</ListItemIcon>
										<ListItemText primary="Housing" />
									</ListItem>
									<ListItem>
										<ListItemIcon>
											{data?.jobAssistance ? (
												<DoneIcon color="success" />
											) : (
												<CloseIcon color="error" />
											)}
										</ListItemIcon>
										<ListItemText primary="Job Assistance" />
									</ListItem>
									<ListItem>
										<ListItemIcon>
											{data?.jobGuarantee ? (
												<DoneIcon color="success" />
											) : (
												<CloseIcon color="error" />
											)}
										</ListItemIcon>
										<ListItemText primary="Job Gurantee" />
									</ListItem>
									<ListItem>
										<ListItemIcon>
											{data?.acceptGi ? (
												<DoneIcon color="success" />
											) : (
												<CloseIcon color="error" />
											)}
										</ListItemIcon>
										<ListItemText primary="Accepts GI Bill" />
									</ListItem>
								</List>
							</Box>
						)}
					</Card>
					<Card sx={{ margin: "20px 0" }}>
						<Typography
							variant="h5"
							sx={{
								padding: "10px 20px",
								backgroundColor: "primary.main",
								borderTopLeftRadius: "6px",
								borderTopRightRadius: "6px",
							}}
						>
							Reviews
						</Typography>
						<Box padding="10px 20px">
							{courseLoading && <Skeleton height="300px" />}
							{reviews?.map((review) => {
								return (
									<div key={review.id}>
										<ReviewModel
											title={review.title}
											text={review.text}
											rating={review.rating}
										/>
									</div>
								);
							})}
						</Box>
					</Card>
				</Box>
			</Box>
		</Container>
	);
}

export default Bootcamp;
