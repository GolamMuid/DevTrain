import styled from "@emotion/styled";
import {
  Box,
  Button,
  Card,
  IconButton,
  Skeleton,
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
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Toast from "../../layouts/toast/Toast";
import { useEffect } from "react";
import DeleteCourse from "./DeleteCourse";
import DeleteBootcamp from "./DeleteBootcamp";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import axios from "axios";
import { BeatLoader } from "react-spinners";

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
  // Snackbar States

  const [snackbarState, setSnackbarState] = useState({
    state: false,
    type: "info",
    message: "",
  });
  const close = () => setSnackbarState(false);

  // Snackbar States

  // bootcampData fetch

  const { id } = useParams();

  const [bootcampData, isLoading, isError, error, isSuccess, refetch] =
    useFetch(
      `https://devtrain.cyclic.app/api/v1/bootcamps/${id}`,
      "bootcampSingle"
    );

  // bootcampData fetch

  // States and functions for Modals

  const [courseAvailable, setCourseAvailable] = useState(false);

  useEffect(() => {
    if (bootcampData?.courses?.length > 0) {
      setCourseAvailable(true);
    }
  }, [bootcampData]);

  console.log(bootcampData);

  const [editBootcamp, setEditBootcamp] = useState(false);
  const [viewDeleteBootcamp, setViewDeleteBootcamp] = useState(false);

  const [viewAddCourse, setViewAddCourse] = useState(false);
  const [viewEditCourse, setViewEditCourse] = useState(false);
  const [viewDeleteCourse, setViewDeleteCourse] = useState(false);

  const [courseInfo, setCourseInfo] = useState({});

  const [loading, setLoading] = useState(false);

  const handleEditCourse = (course) => {
    setCourseInfo(course);
    setViewEditCourse(true);
  };

  const handleDeleteCourse = (course) => {
    setCourseInfo(course);
    setViewDeleteCourse(true);
  };

  const handleDeleteBootcamps = () => {
    setViewDeleteBootcamp(true);
  };

  // States and functions for Modals

  //Image edit

  const handleImage = async (e) => {
    setLoading(true);
    const TOKEN = localStorage.getItem("DevTrain-Token").replace(/['"]+/g, "");
    const selectedImage = e.target.files[0];

    // Uploading image to imgbb

    const formData = new FormData();
    formData.append("image", selectedImage);
    const url = `https://api.imgbb.com/1/upload?key=134180d4237568d4c654209eb72a24f3`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          // imgUpload(image);
          fetch(
            `https://devtrain.cyclic.app/api/v1/bootcamps/${bootcampData._id}`,
            {
              method: "PUT",
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${TOKEN}`,
              },
              body: JSON.stringify({ photo: imgData.data.url }),
            }
          )
            .then((res) => res.json())
            .then((result) => {
              if (result?.success) {
                setLoading(false);
                refetch();
                setSnackbarState({
                  state: true,
                  type: "success",
                  message: "Image Uploaded Successfully",
                });
              } else {
                setLoading(false);
                setSnackbarState({
                  state: true,
                  type: "error",
                  message: "Something went wrong, Please try again",
                });
              }
            });
        }
      });
  };

  // const imgUpload = async (image) => {
  //   console.log("fired");
  //   const TOKEN = localStorage.getItem("DevTrain-Token").replace(/['"]+/g, "");
  //   setLoading(true);
  //   console.log(image);
  //   try {
  //     const response = await axios.put(
  //       `https://devtrain.cyclic.app/api/v1/bootcamps/${bootcampData._id}`,
  //       { photo: image, housing: true },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${TOKEN}`,
  //         },
  //       }
  //     );
  //     console.log(response);
  //     if (response?.data?.success) {
  //       setLoading(false);
  //       // setSnackbarState({
  //       //   state: true,
  //       //   type: "success",
  //       //   message: "Bootcamp Updated Successfully",
  //       // });
  //       refetch();
  //     } else {
  //       // setSnackbarState({
  //       //   state: true,
  //       //   type: "error",
  //       //   message: response.data.error,
  //       // });
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     setSnackbarState({
  //       state: true,
  //       type: "error",
  //       message: "Something went wrong, try again",
  //     });
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  //Image edit

  return (
    <Container>
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "3fr 2fr" }}
        gap="20px"
      >
        <Box padding={{ xs: "0px 20px", md: "0" }} marginBottom="20px">
          {isLoading ? (
            <Skeleton height="30px" />
          ) : (
            <Typography variant="h4" style={{ padding: "20px 0" }}>
              {bootcampData.name}
            </Typography>
          )}
          <Box>
            {isLoading ? (
              <Skeleton height="300px" width="100%" />
            ) : (
              <img
                src={bootcampData.photo}
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
            )}
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            margin="10px"
          >
            {loading ? (
              <Button variant="contained">
                <BeatLoader size={13} color="#fff" />
              </Button>
            ) : (
              <Button
                variant="contained"
                endIcon={<CameraAltIcon />}
                component="label"
              >
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e) => handleImage(e)}
                />
                Change Photo
              </Button>
            )}
          </Box>

          {isLoading ? (
            <Skeleton height="50px" />
          ) : (
            <Typography variant="body1" style={{ padding: "10px 0" }}>
              {bootcampData.description}
            </Typography>
          )}
          {isLoading ? (
            <Skeleton height="100px" />
          ) : (
            <Box padding="20px 0">
              <Table size="small">
                <TableBody>
                  <StyledTableRow>
                    <TableCell> Average Cost per course </TableCell>
                    <TableCell align="right">
                      {" "}
                      ${bootcampData.averageCost}{" "}
                    </TableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <TableCell> Total Cost </TableCell>
                    <TableCell align="right"> $50 </TableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <TableCell> Housing </TableCell>
                    {bootcampData.housing ? (
                      <TableCell align="right"> Yes </TableCell>
                    ) : (
                      <TableCell align="right"> No </TableCell>
                    )}
                  </StyledTableRow>
                  <StyledTableRow>
                    <TableCell> Job Assistance </TableCell>
                    {bootcampData.jobAssistance ? (
                      <TableCell align="right"> Yes </TableCell>
                    ) : (
                      <TableCell align="right"> No </TableCell>
                    )}
                  </StyledTableRow>
                  <StyledTableRow>
                    <TableCell> Job Gurantee </TableCell>
                    {bootcampData.jobGurantee ? (
                      <TableCell align="right"> Yes </TableCell>
                    ) : (
                      <TableCell align="right"> No </TableCell>
                    )}
                  </StyledTableRow>
                  <StyledTableRow>
                    <TableCell> Accepts GI Bill </TableCell>
                    {bootcampData.acceptGi ? (
                      <TableCell align="right"> Yes </TableCell>
                    ) : (
                      <TableCell align="right"> No </TableCell>
                    )}
                  </StyledTableRow>
                </TableBody>
              </Table>
            </Box>
          )}
          {isLoading ? (
            <Skeleton height="50px" />
          ) : (
            <>
              <Button
                variant="contained"
                sx={{ margin: "auto", marginBottom: "20px", display: "block" }}
                onClick={() => setEditBootcamp(true)}
              >
                Edit Bootcamp
              </Button>
              <Button
                variant="contained"
                sx={{ margin: "auto", display: "block" }}
                onClick={handleDeleteBootcamps}
                color="error"
              >
                Delete Bootcamp
              </Button>
            </>
          )}
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
          {isLoading ? (
            <Box padding="0 10px">
              <Skeleton height="200px" />
            </Box>
          ) : (
            <Box padding="10px">
              {!courseAvailable && (
                <Typography variant="h6" textAlign="center" padding="20px">
                  You haven't added any course yet
                </Typography>
              )}

              {courseAvailable &&
                bootcampData?.courses?.map((course, index) => {
                  return (
                    <Box
                      key={index}
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      gap="20px"
                    >
                      <Typography variant="h6">
                        {index + 1}. {course.title}
                      </Typography>
                      <Box display="flex">
                        <IconButton
                          color="infoBlue"
                          onClick={() => handleEditCourse(course)}
                        >
                          {<RiEditLine />}
                        </IconButton>
                        <IconButton
                          color="error"
                          onClick={() => handleDeleteCourse(course)}
                        >
                          {<MdDeleteOutline />}
                        </IconButton>
                      </Box>
                    </Box>
                  );
                })}

              <Box padding="20px 20px 10px">
                <Button
                  variant="contained"
                  sx={{ margin: "auto", display: "block" }}
                  onClick={() => setViewAddCourse(true)}
                >
                  Add Course
                </Button>
              </Box>
            </Box>
          )}
        </Card>
      </Box>
      {!isLoading && (
        <>
          <DeleteBootcamp
            viewDeleteBootcamp={viewDeleteBootcamp}
            setViewDeleteBootcamp={setViewDeleteBootcamp}
            bootcampData={bootcampData}
          />

          <EditBootcamp
            editBootcamp={editBootcamp}
            setEditBootcamp={setEditBootcamp}
            bootcampData={bootcampData}
            setSnackbarState={setSnackbarState}
            refetch={refetch}
          />

          <AddCourse
            viewAddCourse={viewAddCourse}
            setViewAddCourse={setViewAddCourse}
            bootcampData={bootcampData}
            refetch={refetch}
            setSnackbarState={setSnackbarState}
          />

          {Object.keys(courseInfo).length > 0 && (
            <EditCourse
              viewEditCourse={viewEditCourse}
              setViewEditCourse={setViewEditCourse}
              courseInfo={courseInfo}
              setCourseInfo={setCourseInfo}
              refetch={refetch}
            />
          )}

          <DeleteCourse
            viewDeleteCourse={viewDeleteCourse}
            setViewDeleteCourse={setViewDeleteCourse}
            courseInfo={courseInfo}
            refetch={refetch}
            setSnackbarState={setSnackbarState}
          />
        </>
      )}
      <Toast snackbarState={snackbarState} close={close} />
    </Container>
  );
}

export default ManageBootcamp;
