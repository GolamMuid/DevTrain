import { Button, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Container from "../../../layouts/container/Container";
import BootcampModel from "./BootcampModel";
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

function Bootcamps() {
  return (
    <Box marginBottom="80px">
      <Container>
        <Box
          textAlign="center"
          marginBottom="40px"
          padding={{ xs: "0px 20px", md: "0px" }}
        >
          <RubberBand>
            <Typography
              fontFamily="Roboto"
              fontSize="1rem"
              fontWeight="500"
              letterSpacing="3.5px"
              sx={{ color: "#f7bb25" }}
              padding="10px 0"
            >
              Choose your path
            </Typography>
            <Typography variant="h3" color="text.secondary" padding="10px 0">
              Popular Bootcamps
            </Typography>
            <Typography
              fontFamily="Roboto"
              fontWeight="500"
              fontSize={{ xs: "1rem" }}
              lineHeight="1"
              color="text.primary"
              sx={{ lineHeight: "1.3" }}
            >
              Enroll in a bootcamp that suits your career path
              <br />
              and get started
            </Typography>
          </RubberBand>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns={{
            xs: "1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr 1fr",
          }}
          columnGap="40px"
          padding={{ xs: "0px 20px", md: "0px" }}
        >
          <BootcampModel />
          <BootcampModel />
          <BootcampModel />
          <BootcampModel />
          <BootcampModel />
          <BootcampModel />
        </Box>
        <Link to="/bootcamps">
          <Button
            variant="contained"
            sx={{ margin: "auto", display: "block", textDecoration: "none" }}
          >
            See all bootcamps
          </Button>
        </Link>
      </Container>
    </Box>
  );
}

export default Bootcamps;
