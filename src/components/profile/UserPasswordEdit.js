import { Box, Button, Skeleton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function UserPasswordEdit(props) {
  const { setField, setSnackbarState } = props;

  const [editLoading, setEditLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const TOKEN = localStorage.getItem("DevTrain-Token").replace(/['"]+/g, "");
    setEditLoading(true);
    try {
      const response = await axios.put(
        " https://devcamper-api-5zwl.onrender.com/api/v1/auth/updatepassword",
        data,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );
      if (response?.data?.success) {
        setEditLoading(false);
        setSnackbarState({
          state: true,
          type: "success",
          message: "Password Updated Successfully",
        });
      } else {
        setSnackbarState({
          state: true,
          type: "error",
          message: response.data.error,
        });
        setEditLoading(false);
      }
    } catch (error) {
      setSnackbarState({
        state: true,
        type: "error",
        message: "Something went wrong, try again",
      });
      console.log(error);
      setEditLoading(false);
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h6"> Current Password : </Typography>
        <TextField
          variant="outlined"
          size="small"
          type="password"
          sx={{ marginBottom: "10px" }}
          {...register("currentPassword", {
            required: "Password cannot be empty",
          })}
          error={Boolean(errors.currentPassword)}
          helperText={errors.currentPassword?.message}
        />
        <Typography variant="h6"> New Password : </Typography>
        <TextField
          variant="outlined"
          size="small"
          type="password"
          {...register("newPassword", { required: "Password cannot be empty" })}
          error={Boolean(errors.newPassword)}
          helperText={errors.newPassword?.message}
        />
        <Typography variant="body2">
          Password has to be minimum 6 digits
        </Typography>
        {editLoading ? (
          <Skeleton height="50px" />
        ) : (
          <Box display="flex" justifyContent="space-between" marginTop="20px">
            <Button onClick={() => setField("view")}>Back</Button>
            <Button variant="contained" type="submit">
              Edit
            </Button>
          </Box>
        )}
      </form>
    </Box>
  );
}

export default UserPasswordEdit;
