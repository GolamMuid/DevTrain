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
  const navigate = useNavigate();

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

  const [editBootcamp, setEditBootcamp] = useState(false);
  const [viewDeleteBootcamp, setViewDeleteBootcamp] = useState(false);

  const [viewAddCourse, setViewAddCourse] = useState(false);
  const [viewEditCourse, setViewEditCourse] = useState(false);
  const [viewDeleteCourse, setViewDeleteCourse] = useState(false);

  const [refetchState, setRefetchState] = useState(false);

  useEffect(() => {
    refetch();
  }, [refetchState]);

  const [courseInfo, setCourseInfo] = useState({});

  const handleEditCourse = (course) => {
    setCourseInfo(course);
    setViewEditCourse(true);
  };

  const handleDeleteCourse = (course) => {
    setCourseInfo(course);
    setViewDeleteCourse(true);
  };

  const handleDeleteBootcamps = (bootcampData) => {
    setViewDeleteBootcamp(true);
  };

  // States and functions for Modals

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
          />

          <AddCourse
            viewAddCourse={viewAddCourse}
            setViewAddCourse={setViewAddCourse}
            bootcampData={bootcampData}
            refetchState={refetchState}
            setRefetchState={setRefetchState}
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
            refetchState={refetchState}
            setRefetchState={setRefetchState}
            setSnackbarState={setSnackbarState}
          />
        </>
      )}
      <Toast snackbarState={snackbarState} close={close} />
    </Container>
  );
}

export default ManageBootcamp;
