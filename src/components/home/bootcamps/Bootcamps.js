import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Container from "../../../layouts/container/Container";
import BootcampModel from "./BootcampModel";
import BootcampLoader from "./BootcampLoader";
import RubberBand from "react-reveal/RubberBand";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

function Bootcamps() {
  const [data, isLoading, isError, error, isSuccess, refetch] = useFetch(
    "https://devtrain.cyclic.app/api/v1/bootcamps",
    "bootcampsHome"
  );

  console.log(data);

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
            <Typography variant="h3" color="text.primary" padding="10px 0">
              Popular Bootcamps
            </Typography>
            <Typography
              fontFamily="Roboto"
              fontWeight="500"
              fontSize={{ xs: "1rem" }}
              lineHeight="1"
              color="text.secondary"
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
          rowGap="40px"
          padding={{ xs: "0px 20px", md: "0px" }}
          marginBottom="40px"
        >
          {isLoading ? (
            <>
              <BootcampLoader />
              <BootcampLoader />
              <BootcampLoader />
            </>
          ) : (
            data?.map((bootcamp) => {
              return (
                <BootcampModel
                  key={bootcamp.id}
                  id={bootcamp.id}
                  name={bootcamp.name}
                  averageCost={bootcamp.averageCost}
                  description={bootcamp.description}
                  slug={bootcamp.slug}
                  careers={bootcamp.careers}
                  photo={bootcamp.photo}
                  courses={bootcamp.courses}
                />
              );
            })
          )}
        </Box>

        {isError && (
          <Typography
            variant="h3"
            color="text.primary"
            padding="10px 0"
            textAlign="center"
          >
            Something Went Wrong, Please reload
          </Typography>
        )}

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
