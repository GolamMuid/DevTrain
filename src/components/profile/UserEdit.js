import { Box, Button, Skeleton, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function UserEdit(props) {
  const { userInfo, setSnackbarState, getData, setField } = props;

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
        " https://devcamper-api-5zwl.onrender.com/api/v1/auth/updatedetails",
        data,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );
      console.log(response);
      if (response?.data?.success) {
        setEditLoading(false);
        setSnackbarState({
          state: true,
          type: "success",
          message: "Profile Updated Successfully",
        });
        getData();
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
        <Typography variant="h6"> Name : </Typography>
        <TextField
          variant="outlined"
          size="small"
          sx={{ marginBottom: "10px" }}
          defaultValue={userInfo?.name}
          {...register("name", { required: "Name cannot be empty" })}
          error={Boolean(errors.name)}
          helperText={errors.name?.message}
        />
        <Typography variant="h6"> Email : </Typography>
        <TextField
          variant="outlined"
          size="small"
          defaultValue={userInfo?.email}
          {...register("email", { required: "Email cannot be empty" })}
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
        />
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

export default UserEdit;
