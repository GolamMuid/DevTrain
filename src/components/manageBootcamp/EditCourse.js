import styled from "@emotion/styled";
import {
  Button,
  Dialog,
  DialogContent,
  Slide,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Box,
  IconButton,
  InputAdornment,
  OutlinedInput,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import useFetch from "../../hooks/useFetch";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Custom Components

const InputBox = styled(Box)(({ theme }) => ({
  marginBottom: "20px",
}));

// Custom Components

function EditCourse({
  viewEditCourse,
  setViewEditCourse,
  courseInfo,
  setCourseInfo,
  refetch,
}) {
  const TOKEN = localStorage.getItem("DevTrain-Token").replace(/['"]+/g, "");
  const [course, setCourse] = useState(courseInfo);
  // useEffect(() => {
  // 	setCourse(courseInfo);
  // }, [courseInfo]);

  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setViewEditCourse(false);
    setCourseInfo({});
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    setCourse(courseInfo);
    reset(courseInfo);
  }, [courseInfo]);

  const onSubmit = async (data) => {
    setLoading(true);
    console.log(data);

    try {
      const response = await axios.put(
        `https://devtrain.cyclic.app/api/v1/courses/${courseInfo?._id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );
      console.log(response);
      if (response?.data?.success) {
        setLoading(false);
        handleClose();
        refetch();
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={viewEditCourse}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      maxWidth="lg"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="20px"
      >
        <Typography variant="h5">Edit Course</Typography>
        <IconButton onClick={handleClose}> {<RxCross2 />} </IconButton>
      </Box>

      {/* {isLoading ? (
				<PuffLoader />
			) : ( */}
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
            gap={{ xs: "0px", md: "20px" }}
            maxHeight="65vh"
            overflow="auto"
            position="relative"
          >
            {/* Left Column starts */}

            <Box padding="20px">
              <InputBox>
                <Typography variant="body1">Course Title :</Typography>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Course Title"
                  defaultValue={course?.title}
                  {...register("title", {
                    required: "Course Title is required",
                  })}
                  error={Boolean(errors.title)}
                  helperText={errors.title?.message}
                />
              </InputBox>
              <InputBox>
                <Typography variant="body1">Duration :</Typography>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Number of weeks"
                  defaultValue={course?.weeks}
                  {...register("weeks", {
                    required: "Duration is required",
                  })}
                  error={Boolean(errors.weeks)}
                  helperText={errors.weeks?.message}
                />
              </InputBox>
              <InputBox>
                <Typography variant="body1">Course Tuition :</Typography>
                <OutlinedInput
                  type="number"
                  fullWidth
                  size="small"
                  defaultValue={course?.tuition}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  placeholder="Tuition in USD"
                  {...register("tuition", {
                    required: "Tuition is required",
                  })}
                  error={Boolean(errors.tuition)}
                />
                {errors?.tuition?.type === "required" && (
                  <FormHelperText sx={{ color: "red" }}>
                    Tuition is required
                  </FormHelperText>
                )}
              </InputBox>
            </Box>

            {/* Left Column ends */}

            {/* Right Column starts */}

            <Box padding="20px">
              <InputBox>
                <Typography variant="body1">Course Description :</Typography>
                <TextField
                  fullWidth
                  size="small"
                  multiline
                  rows={4}
                  defaultValue={course.description}
                  placeholder="Basic information about the course within 500 characters"
                  {...register("description", {
                    required: true,
                    maxLength: 500,
                  })}
                  error={Boolean(errors.description)}
                  helperText={
                    errors.description?.type === "required"
                      ? "Description is required"
                      : errors.description?.type === "maxLength"
                      ? "Description cannot be longer than 500 characters"
                      : ""
                  }
                />
              </InputBox>
              <InputBox>
                <Typography variant="body1">
                  Minimum Skill Required :
                </Typography>
                {Object?.keys(course).length > 0 && (
                  <>
                    <TextField
                      select
                      fullWidth
                      size="small"
                      defaultValue={courseInfo?.minimumSkill}
                      {...register("minimumSkill")}
                    >
                      <MenuItem value="beginner"> Beginner </MenuItem>
                      <MenuItem value="intermediate"> Intermidiate </MenuItem>
                      <MenuItem value="advanced"> Advanced </MenuItem>
                    </TextField>
                  </>
                )}

                {errors?.minimumSkill?.type === "required" && (
                  <FormHelperText sx={{ color: "red" }}>
                    Minimum Skill is required{" "}
                  </FormHelperText>
                )}
              </InputBox>
              <InputBox>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked={courseInfo.scholarshipAvailable}
                    />
                  }
                  label="Scholarship Available"
                  sx={{ width: "100%" }}
                  {...register("scholarshipAvailable")}
                />
              </InputBox>
            </Box>

            {/* Right Column ends */}
          </Box>
          <Button
            type="submit"
            variant="contained"
            size="small"
            sx={{ display: "block", margin: "20px 0 0px auto" }}
          >
            Edit
          </Button>
        </form>
      </DialogContent>
      {/* )} */}
    </Dialog>
  );
}

export default EditCourse;
