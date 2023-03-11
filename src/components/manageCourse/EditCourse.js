import { Skeleton, styled, TextField, Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

const InputBox = styled(Box)(({ theme }) => ({
  marginBottom: "20px",
}));

function EditCourse() {
  const { id } = useParams();
  console.log(id);

  const [courseData, setcourseData] = useState({});
  const [loading, setLoading] = useState(false);
  console.log(
    "🚀 ~ file: EditCourse.js:10 ~ EditCourse ~ courseData:",
    courseData
  );
  const fetchData = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://devtrain.cyclic.app/api/v1/courses/${id}`
    );
    setcourseData(res.data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    // reset form with user data
    reset(courseData);
  }, [courseData]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box padding="20px">
      {loading ? (
        <Skeleton height="200px" />
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: "20px",
          }}
        >
          <Box>
            <InputBox>
              <TextField
                fullWidth
                placeholder="Course Name"
                key="key1"
                // defaultValue={courseData.title}
                {...register("title", {
                  required: "Course Title is required",
                })}
                error={Boolean(errors.title)}
                helperText={errors.title?.message}
              />
            </InputBox>
          </Box>
          <Box>Col2</Box>
        </Box>
      )}
    </Box>
  );
}

export default EditCourse;
