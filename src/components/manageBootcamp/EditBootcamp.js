import styled from "@emotion/styled";
import {
  Button,
  Dialog,
  DialogContent,
  Slide,
  Checkbox,
  FormControlLabel,
  Switch,
  TextField,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { BeatLoader } from "react-spinners";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Custom Components

const InputBox = styled(Box)(({ theme }) => ({
  marginBottom: "20px",
}));

const GridBox = styled(Box)(({ theme }) => ({
  marginBottom: "6px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
  alignItems: "center",
}));

// Custom Components

function EditBootcamp(props) {
  const {
    editBootcamp,
    setEditBootcamp,
    bootcampData,
    setSnackbarState,
    refetch,
  } = props;

  const handleClose = () => setEditBootcamp(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    const TOKEN = localStorage.getItem("DevTrain-Token").replace(/['"]+/g, "");
    setLoading(true);
    try {
      const response = await axios.put(
        `https://devtrain.cyclic.app/api/v1/bootcamps/${bootcampData._id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );
      if (response?.data?.success) {
        setLoading(false);
        setSnackbarState({
          state: true,
          type: "success",
          message: "Bootcamp Updated Successfully",
        });
        refetch();
        handleClose();
      } else {
        setSnackbarState({
          state: true,
          type: "error",
          message: response.data.error,
        });
        setLoading(false);
      }
    } catch (error) {
      setSnackbarState({
        state: true,
        type: "error",
        message: "Something went wrong, try again",
      });
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={editBootcamp}
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
        <Typography variant="h5">Edit Bootcamp</Typography>
        <IconButton onClick={handleClose}> {<RxCross2 />} </IconButton>
      </Box>

      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
            gap="20px"
            maxHeight="65vh"
            overflow="auto"
            position="relative"
          >
            {/* Left Column starts */}

            <Box padding="20px">
              <InputBox>
                <Typography variant="body1">Name :</Typography>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Bootcamp Name"
                  defaultValue={bootcampData?.name}
                  {...register("name", { required: "Name is required" })}
                  error={Boolean(errors.name)}
                  helperText={errors.name?.message}
                />
              </InputBox>
              <InputBox>
                <Typography variant="body1">Description :</Typography>
                <TextField
                  fullWidth
                  size="small"
                  multiline
                  rows={4}
                  defaultValue={bootcampData?.description}
                  placeholder="Description (What you offer, Basic idea about the bootcamp etc) 500 characters max"
                  {...register("description", { maxLength: 500 })}
                  error={Boolean(errors.description)}
                  helperText={
                    errors.description &&
                    "Description cannot be more than 500 characters"
                  }
                />
              </InputBox>

              {/* <InputBox>
								<Typography variant="body1">Contact Number :</Typography>
								<TextField
									type="number"
									fullWidth
									size="small"
									placeholder="Phone / Mobile"
									{...register("contactNo", {
										minLength: 6,
										maxLength: 12,
										message: "Insert a valid phone number",
									})}
									error={Boolean(errors.contactNo)}
									helperText={
										errors.contactNo ? "Insert a valid phone number" : ""
									}
								/>
							</InputBox> */}

              <InputBox>
                <Typography variant="body1">Email :</Typography>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Contact Email"
                  defaultValue={bootcampData?.email}
                  {...register("email", { pattern: /^\S+@\S+$/i })}
                  error={Boolean(errors.email)}
                  helperText={
                    errors.email ? "Insert a valid email address" : ""
                  }
                />
              </InputBox>
              <InputBox>
                <Typography variant="body1">Website :</Typography>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Website URL"
                  defaultValue={bootcampData?.website}
                  {...register("website")}
                />
              </InputBox>
            </Box>

            {/* Left Column ends */}

            {/* Right Column starts */}

            <Box padding="20px">
              <InputBox>
                <Typography variant="body1">Careers :</Typography>
                <Box display="flex" justifyContent="space-between">
                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox
                          defaultChecked={bootcampData?.careers?.includes(
                            "Web Development"
                          )}
                        />
                      }
                      label="Web Development"
                      value="Web Development"
                      sx={{ width: "100%" }}
                      {...register("careers")}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          defaultChecked={bootcampData?.careers?.includes(
                            "Mobile Development"
                          )}
                        />
                      }
                      label="Mobile Development"
                      value="Mobile Development"
                      sx={{ width: "100%" }}
                      {...register("careers")}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          defaultChecked={bootcampData?.careers?.includes(
                            "UI/UX"
                          )}
                        />
                      }
                      label="UI/UX"
                      value="UI/UX"
                      sx={{ width: "100%" }}
                      {...register("careers")}
                    />
                  </Box>
                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox
                          defaultChecked={bootcampData?.careers?.includes(
                            "Data Science"
                          )}
                        />
                      }
                      label="Data Science"
                      value="Data Science"
                      sx={{ width: "100%" }}
                      {...register("careers")}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          defaultChecked={bootcampData?.careers?.includes(
                            "Business"
                          )}
                        />
                      }
                      label="Business"
                      value="Business"
                      sx={{ width: "100%" }}
                      {...register("careers")}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          defaultChecked={bootcampData?.careers?.includes(
                            "Other"
                          )}
                        />
                      }
                      label="Other"
                      value="Other"
                      sx={{ width: "100%" }}
                      {...register("careers")}
                    />
                  </Box>
                </Box>
              </InputBox>
              <GridBox>
                <Typography variant="body1">Housing</Typography>
                <FormControlLabel
                  control={
                    <Switch
                      name="housing"
                      defaultChecked={bootcampData.housing}
                      {...register("housing")}
                    />
                  }
                />
              </GridBox>
              <GridBox>
                <Typography variant="body1">Job Assistance</Typography>
                <FormControlLabel
                  control={
                    <Switch
                      name="jobAssistance"
                      defaultChecked={bootcampData.jobAssistance}
                      {...register("jobAssistance")}
                    />
                  }
                />
              </GridBox>
              <GridBox>
                <Typography variant="body1">Job Guarantee</Typography>
                <FormControlLabel
                  control={
                    <Switch
                      name="jobGuarantee"
                      defaultChecked={bootcampData.jobGuarantee}
                      {...register("jobGuarantee")}
                    />
                  }
                />
              </GridBox>
              <GridBox>
                <Typography variant="body1">Accepts GI Bill</Typography>
                <FormControlLabel
                  control={
                    <Switch
                      name="acceptGi"
                      defaultChecked={bootcampData.acceptGi}
                      {...register("acceptGi")}
                    />
                  }
                />
              </GridBox>
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
              Edit
            </Button>
          )}
          {/* <Button
            type="submit"
            variant="contained"
            size="small"
            sx={{ display: "block", margin: "20px 0 0px auto" }}
          >
            Edit
          </Button> */}
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditBootcamp;
