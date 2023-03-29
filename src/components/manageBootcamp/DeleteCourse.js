import {
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BeatLoader } from "react-spinners";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function DeleteCourse(props) {
  const {
    viewDeleteCourse,
    setViewDeleteCourse,
    courseInfo,
    setSnackbarState,
    refetch,
  } = props;
  const course = courseInfo._id;

  const handleClose = () => setViewDeleteCourse(false);

  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    const TOKEN = localStorage.getItem("DevTrain-Token").replace(/['"]+/g, "");
    setLoading(true);
    try {
      const response = await axios.delete(
        `https://devtrain.cyclic.app/api/v1/courses/${course}`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );
      if (response?.data?.success) {
        setLoading(false);
        refetch();
        handleClose();
        setSnackbarState({
          state: true,
          type: "success",
          message: "Course Deleted Successfully",
        });
      } else {
        alert("falied");
        setLoading(false);
      }
    } catch (error) {
      setSnackbarState({
        state: true,
        type: "error",
        message: "Invalid Credentials",
      });
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={viewDeleteCourse}
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
        <Box>
          Do you want to delete the course
          <Box
            component="div"
            sx={{ display: "inline", color: "primary.main", fontWeight: "700" }}
          >
            &nbsp;{courseInfo?.title}&nbsp;
          </Box>
          ?
        </Box>
        <Box display="flex" justifyContent="end" gap="20px" marginTop="40px">
          <Button onClick={handleClose}> Cancel </Button>
          {loading ? (
            <Button variant="contained">
              <BeatLoader size={13} color="#fff" />
            </Button>
          ) : (
            <Button variant="contained" onClick={handleDelete}>
              Confirm
            </Button>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteCourse;
