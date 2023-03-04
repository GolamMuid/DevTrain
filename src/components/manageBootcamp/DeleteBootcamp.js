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
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    const TOKEN = localStorage.getItem("DevTrain-Token").replace(/['"]+/g, "");
    setLoading(true);
    try {
      const response = await axios.delete(
        `https://devtrain.cyclic.app/api/v1/bootcamps/${bootcampData?._id}`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );
      if (response?.data?.success) {
        setLoading(false);
        navigate("/profile");
      } else {
        alert("falied");
        setLoading(false);
      }
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  };

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
        <Box>
          Do you want to delete the Bootcamp
          <Box
            component="div"
            sx={{ display: "inline", color: "primary.main", fontWeight: "700" }}
          >
            &nbsp;{bootcampData?.name}&nbsp;
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

export default DeleteBootcamp;
