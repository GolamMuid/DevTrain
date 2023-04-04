import styled from "@emotion/styled";
import { Box, Button, Chip, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function BootcampModel(props) {
  const { name, averageCost, description, id, careers, photo, courses } = props;

  const BootcampModel = styled(Paper)(({ theme }) => ({
    backgroundImage: "none",
    "& div:nth-of-type(1)": {
      overflow: "hidden",
      maxHeight: "220px",
      maxWidth: "fit-content",
    },
    "& img": {
      width: "100%",
      objectFit: "cover",
      borderRadius: "4px",
      transition: "all 0.3s ease",
    },
    "&:hover": {
      "& img": {
        transform: "scale(1.1)",
      },
    },
  }));

  return (
    <BootcampModel elevation={3}>
      <Box>
        <img src={photo} alt="Bootcamp" />
      </Box>
      <Box padding="10px 20px">
        <Typography variant="h5" color="text.primary">
          {name}
        </Typography>
        <Typography variant="h6" color="text.secondary" marginBottom="10px">
          ${averageCost * courses.length}
        </Typography>
        {careers?.map((career, i) => {
          return (
            <Chip
              key={i}
              label={career}
              color="chipPrimary"
              size="small"
              sx={{ color: "primary.main", margin: "0 6px 6px 0" }}
            />
          );
        })}
        <Typography
          fontFamily="Roboto"
          fontWeight="400"
          fontSize={{ xs: "1rem" }}
          lineHeight="1.2"
          color="text.primary"
          margin="10px 0"
        >
          {description}
        </Typography>
        <Stack alignItems="center" margin="10px 0px 0">
          <Link to={`/bootcamps/${id}`}>
            <Button
              variant="text"
              color="primary"
              // onClick={(id) => navigate(`/bootcamp/${id}`)}
            >
              See Details
            </Button>
          </Link>
        </Stack>
      </Box>
    </BootcampModel>
  );
}

export default BootcampModel;
