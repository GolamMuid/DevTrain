import React, { useContext, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  FormControlLabel,
  IconButton,
  Menu,
  MenuItem,
  Skeleton,
  Switch,
} from "@mui/material";
import styled from "@emotion/styled";
import ModeContext from "../../contexts/ModeContext";
import { Link } from "react-router-dom";
import TopDrawer from "./TopDrawer";
import Hamburger from "hamburger-react";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#003892",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

function Navbar() {
  const { handleDarkMode, darkMode } = useContext(ModeContext);

  const [scrolled, setScrolled] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [loading, setLoading] = useState(true);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  useEffect(() => {
    if (localStorage.getItem("DevTrain-Token")) {
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("DevTrain-Token");
    navigate("/login");
  };

  const handleBrowseBootcamps = () => {
    handleClose();
    navigate("/profile");
  };

  const [drawerState, setDrawerState] = useState(false);

  const navigate = useNavigate();
  return (
    <AppBar
      enableColorOnDark
      elevation={scrolled || drawerState ? 4 : 0}
      sx={
        scrolled
          ? { bgcolor: "navBg.scrolled", backdropFilter: "blur(5px)" }
          : { bgcolor: "navBg.main" }
      }
    >
      <TopDrawer
        drawerState={drawerState}
        setDrawerState={setDrawerState}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
      />
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          color="text.primary"
          sx={{ flexGrow: 1 }}
        >
          <Link to="/">DevTrain</Link>
        </Typography>
        <Box
          display={{ xs: "none", md: "flex" }}
          gap="20px"
          alignItems="center"
        >
          <FormControlLabel
            onChange={handleDarkMode}
            checked={darkMode}
            control={<MaterialUISwitch />}
          />

          <Button variant="text" onClick={() => navigate("/bootcamps")}>
            Browse Bootcamps
          </Button>

          {loading ? (
            <Skeleton />
          ) : (
            <>
              {" "}
              {isLoggedIn ? (
                <>
                  <IconButton
                    color="primary"
                    sx={{ fontSize: "2rem" }}
                    onClick={handleMenu}
                  >
                    <AccountCircleIcon fontSize="large" />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    sx={{ top: "40px" }}
                  >
                    <MenuItem onClick={handleBrowseBootcamps}>Profile</MenuItem>
                    <MenuItem onClick={handleLogout}> Logout </MenuItem>
                  </Menu>
                </>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              )}
            </>
          )}
        </Box>
        <Box display={{ xs: "block", md: "none" }}>
          <IconButton onClick={() => setDrawerState(!drawerState)}>
            <Hamburger
              toggled={drawerState}
              toggle={setDrawerState}
              size={24}
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
