import { Box, Button, Rating, TextField, Typography } from "@mui/material";
import React from "react";
import Container from "../../layouts/container/Container";
import { BeatLoader } from "react-spinners";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import useUserInfo from "../../hooks/useUserInfo";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

function Review() {
  const { id } = useParams();
  const TOKEN = localStorage.getItem("DevTrain-Token").replace(/['"]+/g, "");

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [reviewed, setReviewed] = useState(false);
  const [review, setReview] = useState({
    title: "",
    text: "",
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setReview({
      ...review,
      [name]: name === "rating" ? Number(value) : value,
    });
  };

  const [userInfo] = useUserInfo();
  const [reviews] = useFetch(
    ` https://devcamper-api-5zwl.onrender.com/api/v1/bootcamps/${id}/reviews`,
    "reviewData"
  );

  useEffect(() => {
    const previousReview = reviews?.find((obj) => obj.user === userInfo?._id);
    if (previousReview) {
      setReview(previousReview);
      setReviewed(true);
    }
  }, [userInfo]);

  const handleEdit = async () => {
    setLoading(true);
    try {
      const response = await axios.put(
        ` https://devcamper-api-5zwl.onrender.com/api/v1/reviews/${review._id}`,
        review,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );
      if (response?.data?.success) {
        setLoading(false);
        navigate(`/bootcamps/${id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePost = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        ` https://devcamper-api-5zwl.onrender.com/api/v1/bootcamps/${id}/reviews`,
        review,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );
      if (response?.data?.success) {
        setLoading(false);
        navigate(`/bootcamps/${id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Box marginBottom="10px">
        Write your experience on
        <Box
          component="div"
          sx={{ display: "inline", color: "primary.main", fontWeight: "700" }}
        >
          {/* &nbsp;{reviewInfo?.name}&nbsp; */}
        </Box>
      </Box>
      <TextField
        fullWidth
        placeholder="Title"
        value={review.title}
        name="title"
        onChange={(e) => handleChange(e)}
        sx={{ marginBottom: "10px" }}
      />
      <TextField
        fullWidth
        multiline
        minRows={3}
        name="text"
        value={review.text}
        onChange={handleChange}
        placeholder="Description"
        sx={{ marginBottom: "10px" }}
      />
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Typography variant="h6"> Rating: </Typography>

        <Rating name="rating" value={review.rating} onChange={handleChange} />
      </Box>
      <Box
        className="review-button-container"
        display="flex"
        justifyContent="end"
        gap="20px"
        marginTop="40px"
      >
        {loading ? (
          <Button variant="contained">
            <BeatLoader size={13} color="#fff" />
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={reviewed ? handleEdit : handlePost}
          >
            Submit
          </Button>
        )}
      </Box>
    </Container>
  );
}

export default Review;
