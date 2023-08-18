import { Box, Link, Typography } from "@mui/material";
import React, { useContext } from "react";
import ModeContext from "../../contexts/ModeContext";

function Footer() {
  const year = new Date().getFullYear();

  const mode = useContext(ModeContext);

  return (
    <Box
      sx={{
        backgroundColor: "info.main",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Typography variant="h5"> DevTrain </Typography>
      <Box sx={{ maxWidth: "650px", margin: "auto", padding: "10px 0 20px" }}>
        DevTrain is an online learning platform, specially designed for people
        who are intersted to make their career as a developers. This is also an
        interesting platform for the experts to spread their knowledger
        throughout various courses. Devtrain is determined to provide the best
        possible service to all the users
      </Box>
      <Box sx={{ maxWidth: "620px", margin: "auto" }}>
        <Typography variant="h6" sx={{ fontSize: "1rem" }}>
          Copyright &#169; {year}{" "}
          <Link href="/" sx={{ color: "footerLink.main" }}>
            {" "}
            Devtrain{" "}
          </Link>
        </Typography>
        <Typography variant="h6" sx={{ fontSize: "1rem" }}>
          Designed and Developed by{" "}
          <Link
            href="https://github.com/GolamMuid"
            sx={{ color: "footerLink.main" }}
          >
            {" "}
            Md. Golam Muid Talukder{" "}
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
