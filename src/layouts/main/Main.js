import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import ScrollFromStart from "../scroll/ScrollFromStart";

const Main = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Box sx={{ height: "80px" }}></Box>
      <ScrollFromStart />
      {children}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
