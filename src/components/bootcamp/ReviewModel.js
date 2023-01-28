import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { BsStarFill } from "react-icons/bs";

function ReviewModel() {
  return (
    <Box padding="10px 0 20px">
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6">Lorem Ipsum</Typography>
        <Typography color="warning.main">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </Typography>
      </Box>
      <Typography variant="body1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Typography>
    </Box>
  );
}

export default ReviewModel;
