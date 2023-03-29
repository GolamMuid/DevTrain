import { Button, Card, Typography, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import BootcampCard from "../bootcamps/BootcampCard";

function BootcampInfo(userInfo) {
  const navigate = useNavigate();
  const userId = userInfo?.userInfo?._id;

  const [data, isLoading] = useFetch(
    "https://devtrain.cyclic.app/api/v1/bootcamps",
    "bootcampProfile"
  );

  const bootcamp = data?.find((item) => item.user === userId);

  return (
    <>
      {bootcamp ? (
        <Box>
          <Card>
            <Typography
              variant="h5"
              sx={{
                padding: "10px 20px",
                backgroundColor: "primary.main",
                borderTopLeftRadius: "6px",
                borderTopRightRadius: "6px",
              }}
            >
              Bootcamp Info
            </Typography>

            <BootcampCard
              id={bootcamp.id}
              name={bootcamp.name}
              averageCost={bootcamp.averageCost}
              description={bootcamp.description}
              photo={bootcamp.photo}
            />
          </Card>
          <Box padding="20px">
            <Button
              sx={{ display: "block", margin: "auto" }}
              onClick={() => navigate(`/manage-bootcamp/${bootcamp.id}`)}
            >
              Manage Bootcamp
            </Button>
          </Box>
        </Box>
      ) : (
        <Box>
          {isLoading ? (
            <Skeleton height="100px" />
          ) : (
            <Box>
              <Typography variant="h5" textAlign="center">
                You haven't added any bootcamp yet
              </Typography>
              <Button
                sx={{ display: "block", margin: "auto" }}
                onClick={() => navigate("/add-bootcamp")}
              >
                Add Bootcamp
              </Button>
            </Box>
          )}
        </Box>
      )}
    </>
  );
}

export default BootcampInfo;
