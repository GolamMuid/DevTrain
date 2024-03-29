import styled from "@emotion/styled";
import { Button, Card, Chip, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

function BootcampCard({
  id,
  name,
  averageCost,
  description,
  rating,
  careers,
  photo,
  courses,
}) {
  const BootcampCard = styled(Card)(({ theme }) => ({
    maxWidth: "100%",
    backgroundImage: "none",
    "& img": {
      // maxWidth: "100%",
      maxHeight: "160px",
      objectFit: "contain",
      borderRadius: "4px",
      transition: "all 0.3s ease",
      margin: "auto",
      // transform: "scale(1.1)",
    },
    "&:hover": {
      "& img": {
        transform: "scale(1.1)",
      },
    },
  }));

  return (
    <BootcampCard>
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "2fr 3fr" }}
        gap={{ xs: "0", md: "20px" }}
        padding="10px"
      >
        <Box
          overflow="hidden"
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding={{ xs: "0 10px", md: "0" }}
        >
          <img src={photo} alt="Bootcamp" />
        </Box>
        <Box padding="10px">
          <Box paddingLeft="8px">
            <Typography variant="h5" color="primary" padding="0 0 10px">
              {name}
            </Typography>
            {courses ? (
              <Typography
                variant="h6"
                color="text.secondary"
                marginBottom="10px"
              >
                ${averageCost * courses?.length}
              </Typography>
            ) : (
              ""
            )}
            <Typography color="warning.main">
              <Rating
                value={rating > 5 ? rating / 2 : rating}
                precision={0.5}
                readOnly
              />
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
              padding="10px 0"
            >
              {description}
            </Typography>
          </Box>
          <Link to={`/bootcamps/${id}`}>
            <Button> See Details </Button>
          </Link>
        </Box>
      </Box>
    </BootcampCard>
  );
}

export default BootcampCard;
