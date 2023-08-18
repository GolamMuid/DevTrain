import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Rating,
  Slide,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BeatLoader } from "react-spinners";
import useFetch from "../../hooks/useFetch";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ReviewModal({ reviewModal, setReviewModal, reviewInfo }) {
  const [loading, setLoading] = useState(false);

  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewDescription, setReviewDescription] = useState("");

  const [ratingValue, setRatingValue] = useState(0);

  const handleCloseModal = () => {
    setReviewModal(false);
  };

  return (
    <Dialog
      open={reviewModal}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleCloseModal}
      maxWidth="md"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="20px"
      >
        <Typography variant="h5">Review</Typography>
        <IconButton onClick={handleCloseModal}> {<RxCross2 />} </IconButton>
      </Box>

      <DialogContent>
        <Box marginBottom="10px">
          Write your experience on
          <Box
            component="div"
            sx={{ display: "inline", color: "primary.main", fontWeight: "700" }}
          >
            &nbsp;{reviewInfo?.name}&nbsp;
          </Box>
        </Box>
        <TextField
          fullWidth
          placeholder="Title"
          value={reviewTitle}
          onChange={(e) => setReviewTitle(e.target.value)}
          sx={{ marginBottom: "10px" }}
        />
        <TextField
          fullWidth
          multiline
          minRows={3}
          value={reviewDescription}
          onChange={(e) => setReviewDescription(e.target.value)}
          placeholder="Description"
          sx={{ marginBottom: "10px" }}
        />
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            // justifyContent: "center",
          }}
        >
          <Typography variant="h6"> Rating: </Typography>

          <Rating
            name="simple-controlled"
            value={ratingValue}
            onChange={(e) => setRatingValue(e.target.value)}
          />
        </Box>
        <Box display="flex" justifyContent="end" gap="20px" marginTop="40px">
          <Button> Cancel </Button>
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

export default ReviewModal;
