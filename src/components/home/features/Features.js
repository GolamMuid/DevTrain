import React from "react";
import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Container from "../../../layouts/container/Container";
import { Fade } from "react-reveal";

function Features() {
  return (
    <Box
      sx={{
        backgroundColor: "info.main",
        borderRadius: { xs: "0", md: "30%" },
        padding: { xs: "60px 30px", md: "60px 0" },
        marginBottom: "80px",
      }}
    >
      <Container>
        <Box
          display="grid"
          gridTemplateColumns={{
            xs: "1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr 1fr 1fr",
          }}
          gap="20px"
        >
          <Fade bottom big delay={100}>
            <Paper>
              <Box padding="20px 10px">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/trainer.png`}
                  alt="Expert Trainers"
                  style={{ height: "90px" }}
                />
                <Typography variant="h5" color="text.primary" padding="10px 0">
                  Expert Trainers
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Box>
            </Paper>
          </Fade>
          <Fade bottom big delay={200}>
            <Paper>
              <Box padding="20px 10px">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/certificate.png`}
                  alt="Expert Trainers"
                  style={{ height: "90px" }}
                />
                <Typography variant="h5" color="text.primary" padding="10px 0">
                  Certification
                </Typography>
                <Typography variant="p" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Box>
            </Paper>
          </Fade>
          <Fade bottom big delay={300}>
            <Paper>
              <Box padding="20px 10px">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/scholarship.png`}
                  alt="Expert Trainers"
                  style={{ height: "90px" }}
                />
                <Typography variant="h5" color="text.primary" padding="10px 0">
                  Scholarship
                </Typography>
                <Typography variant="p" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Box>
            </Paper>
          </Fade>
          <Fade bottom big delay={400}>
            <Paper>
              <Box padding="20px 10px">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/job.png`}
                  alt="Expert Trainers"
                  style={{ height: "90px" }}
                />
                <Typography variant="h5" color="text.primary" padding="10px 0">
                  Job Assistance
                </Typography>
                <Typography variant="p" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Box>
            </Paper>
          </Fade>
        </Box>
      </Container>
    </Box>
  );
}

export default Features;
