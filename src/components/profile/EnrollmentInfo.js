import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import BootcampCard from "../bootcamps/BootcampCard";

function EnrollmentInfo({ userInfo }) {
  const enrolledBootcamps = userInfo?.bootcamps;

  const userId = userInfo?._id;
  const navigate = useNavigate();

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          padding: "10px 20px",
          backgroundColor: "primary.main",
        }}
      >
        Enrolled Bootcamps
      </Typography>

      {enrolledBootcamps.length > 0 ? (
        <>
          {enrolledBootcamps?.map((bootcamp) => {
            return (
              <Box marginBottom="20px">
                <BootcampCard
                  id={bootcamp.id}
                  name={bootcamp.name}
                  averageCost={bootcamp.averageCost}
                  description={bootcamp.description}
                  photo={bootcamp.photo}
                />
              </Box>
            );
          })}
        </>
      ) : (
        <>
          <Typography variant="h5" sx={{ textAlign: "center", margin: "20px" }}>
            You haven't endrolled into any bootcamp yet
          </Typography>
          <Button
            variant="contained"
            sx={{ display: "block", margin: "auto", marginBottom: "20px" }}
            onClick={() => navigate("/bootcamps")}
          >
            Browse Bootcamps
          </Button>
        </>
      )}
    </Box>
  );
}

export default EnrollmentInfo;
