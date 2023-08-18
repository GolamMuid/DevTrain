import {
  Button,
  Card,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Pagination,
  Paper,
  Skeleton,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Container from "../../layouts/container/Container";
import BootcampCard from "./BootcampCard";
import SearchIcon from "@mui/icons-material/Search";

function Bootcamps() {
  const [data, isLoading, isError, error, isSuccess, refetch] = useFetch(
    "https://devtrain.cyclic.app/api/v1/bootcamps",
    "bootcampCollection"
  );

  const [searchTerm, setSearchTerm] = useState("");

  // const [radiusValue, setRadiusValue] = useState(0);
  // const [zipValue, setZipValue] = useState(0);
  // const [cost, setCost] = useState([0, 20000]);

  // const handleRadiusChange = (event, newValue) => {
  //   setRadiusValue(newValue);
  // };

  // const handleCostChange = (event, newValue) => {
  //   setCost(newValue);
  // };

  return (
    <Box>
      <Container>
        {/* <Box
          padding="20px 0px"
          display="grid"
          gridTemplateColumns={{ xs: "1fr", md: "2fr 3fr" }}
          gap="20px"
        > */}
        {/* <Box padding="0px 10px">
            <Paper sx={{ padding: "20px 10px", height: "fit-content" }}>
              <Typography
                variant="h4"
                color="text.primary"
                padding="10px 0"
                textAlign="center"
                backgroundImage="none"
              >
                Filter
              </Typography>
              <Box>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  padding="10px 0"
                >
                  Search by radius
                </Typography>
                <Box padding="0px 20px 20px">
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={radiusValue}
                    onChange={handleRadiusChange}
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={0}
                    max={100}
                    // getAriaValueText={valuetext}
                  />
                </Box>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  padding="10px 0"
                >
                  Search by Zipcode
                </Typography>
                <TextField
                  variant="standard"
                  size="small"
                  fullWidth
                  value={zipValue}
                  type="number"
                  onChange={(e) => setZipValue(e.target.value)}
                />
                <Typography
                  variant="h6"
                  color="text.secondary"
                  padding="10px 0"
                >
                  Search by costing
                </Typography>
                <Box padding="0px 20px 20px">
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={cost}
                    onChange={handleCostChange}
                    valueLabelDisplay="auto"
                    step={1000}
                    marks
                    min={0}
                    max={20000}
                    // getAriaValueText={valuetext}
                  />
                </Box>
                <Stack alignItems="center">
                  <Button variant="contained"> Search </Button>
                </Stack>
              </Box>
            </Paper>
          </Box> */}
        <Box padding="0px 10px" marginBottom="40px">
          <Box display="flex" flexDirection="column" gap="20px">
            <OutlinedInput
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end">{<SearchIcon />}</IconButton>
                </InputAdornment>
              }
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Bootcamps"
            />
            {isLoading ? (
              <>
                <Skeleton height="200px" />
                <Skeleton height="200px" />
                <Skeleton height="200px" />
                <Skeleton height="200px" />
              </>
            ) : (
              data
                ?.filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.name.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((bootcamp) => {
                  return (
                    <BootcampCard
                      key={bootcamp.id}
                      id={bootcamp.id}
                      name={bootcamp.name}
                      averageCost={bootcamp.averageCost}
                      description={bootcamp.description}
                      rating={bootcamp.averageRating}
                      slug={bootcamp.slug}
                      careers={bootcamp.careers}
                      photo={bootcamp.photo}
                      courses={bootcamp.courses}
                    />
                  );
                })
            )}
            {/* <Box padding="10px" display="flex" justifyContent="center">
                <Pagination count={10} color="primary" />
              </Box> */}
          </Box>
        </Box>
        {/* </Box> */}
      </Container>
    </Box>
  );
}

export default Bootcamps;
