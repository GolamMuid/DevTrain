import {
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Container from "../../layouts/container/Container";
import CourseModel from "./CourseModel";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import ReviewModel from "./ReviewModel";

function Bootcamp() {
  return (
    <Container>
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "2fr 1fr" }}
        gap="20px"
      >
        <Box padding={{ xs: "0px 10px", md: "0" }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            maxHeight="400px"
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/class.jpg`}
              alt="Bootcamp"
              style={{ objectFit: "contain", height: "100%", width: "100%" }}
            />
          </Box>
          <Typography variant="h4" style={{ padding: "20px 0" }}>
            DevWorks Bootcamp
          </Typography>
          <Typography variant="body1" style={{ padding: "10px 0" }}>
            Devworks is a full stack JavaScript Bootcamp located in the heart of
            Boston that focuses on the technologies you need to get a high
            paying job as a web developer
          </Typography>
          <CourseModel />
          <CourseModel />
          <CourseModel />
        </Box>
        <Box margin={{ xs: "0 10px", md: "0" }}>
          <Card sx={{ padding: "10px 0" }}>
            <Typography variant="h6" textAlign="center" color="primary">
              Average cost per course:
            </Typography>
            <Typography variant="h6" textAlign="center">
              $8000
            </Typography>
            <Typography variant="h6" textAlign="center" color="primary">
              Total Cost:
            </Typography>
            <Typography variant="h6" textAlign="center">
              $10000
            </Typography>
            <Box padding="20px 30px 0">
              <List dense={true}>
                <ListItem>
                  <ListItemIcon>
                    <DoneIcon color="success" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Housing"
                    sx={{ fontSize: "2rem !important" }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CloseIcon color="error" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Job Assistance"
                    sx={{ fontSize: "2rem !important" }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneIcon color="success" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Job Gurantee"
                    sx={{ fontSize: "2rem !important" }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CloseIcon color="error" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Accepts GI Bill"
                    sx={{ fontSize: "2rem !important" }}
                  />
                </ListItem>
              </List>
            </Box>
          </Card>
          <Card sx={{ margin: "20px 0" }}>
            <Typography
              variant="h5"
              sx={{
                padding: "10px 20px",
                backgroundColor: "primary.main",
                borderTopLeftRadius: "6px",
                borderTopRightRadius: "6px",
              }}
            >
              Reviews
            </Typography>
            <Box padding="10px 20px">
              <ReviewModel />
              <ReviewModel />
              <ReviewModel />
            </Box>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}

export default Bootcamp;
