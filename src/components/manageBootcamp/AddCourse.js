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
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { BeatLoader } from "react-spinners";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Custom Components

const InputBox = styled(Box)(({ theme }) => ({
  marginBottom: "20px",
}));

// Custom Components

function AddCourse(props) {
  const {
    viewAddCourse,
    setViewAddCourse,
    bootcampData,
    setSnackbarState,
    refetch,
  } = props;

  const bootcampId = bootcampData?.id;

  const handleClose = () => setViewAddCourse(false);

  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const TOKEN = localStorage.getItem("DevTrain-Token").replace(/['"]+/g, "");
    setLoading(true);
    try {
      const response = await axios.post(
        `https://devtrain.cyclic.app/api/v1/bootcamps/${bootcampId}/courses`,
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
        refetch();
        handleClose();
        setSnackbarState({
          state: true,
          type: "success",
          message: "Course Added Successfully",
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
    console.log(data);
  };

  return (
    <Dialog
      open={viewAddCourse}
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
        <Typography variant="h5">Add Course</Typography>
        <IconButton onClick={handleClose}> {<RxCross2 />} </IconButton>
      </Box>

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
                  {...register("weeks", { required: "Duration is required" })}
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
                  <FormHelperText
                    sx={{ marginLeft: "16px", color: "error.main" }}
                  >
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
                <Controller
                  name="minimumSkill"
                  defaultValue="beginner"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      select
                      {...field}
                      fullWidth
                      error={errors?.minimumSkill}
                      size="small"
                    >
                      <MenuItem value="beginner">Beginner</MenuItem>
                      <MenuItem value="intermediate">Intermediate</MenuItem>
                      <MenuItem value="advanced">Advanced</MenuItem>
                    </TextField>
                  )}
                  rules={{ required: true }}
                />

                {errors?.minimumSkill?.type === "required" && (
                  <FormHelperText sx={{ color: "red" }}>
                    Minimum Skill is required{" "}
                  </FormHelperText>
                )}
              </InputBox>
              <InputBox>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Scholarship Available"
                  sx={{ width: "100%" }}
                  {...register("scholarshipAvailable")}
                />
              </InputBox>
            </Box>

            {/* Right Column ends */}
          </Box>
          {loading ? (
            <Button
              type="submit"
              variant="contained"
              size="small"
              sx={{ display: "block", margin: "20px 0 0px auto" }}
            >
              <BeatLoader size={13} color="#fff" />
            </Button>
          ) : (
            <Button
              type="submit"
              variant="contained"
              size="small"
              sx={{ display: "block", margin: "20px 0 0px auto" }}
            >
              Add
            </Button>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddCourse;
