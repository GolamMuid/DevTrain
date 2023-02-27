import { Avatar, Paper } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";

import Toast from "../../layouts/toast/Toast";
import UserEdit from "./UserEdit";
import UserInfo from "./UserInfo";
import UserPasswordEdit from "./UserPasswordEdit";

function UserDetail() {
  let TOKEN = localStorage.getItem("DevTrain-Token").replace(/['"]+/g, "");

  const [loading, setLoading] = useState(false);

  const [userInfo, setUserInfo] = useState({});

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://devtrain.cyclic.app/api/v1/auth/me`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );
      setUserInfo(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const [field, setField] = useState("view");

  const [snackbarState, setSnackbarState] = useState({
    state: false,
    type: "info",
    message: "",
  });

  const close = () => setSnackbarState(false);

  return (
    <Paper sx={{ padding: "20px" }}>
      <Box display="grid" gridTemplateColumns={{ sx: "1fr", md: "1fr 1fr" }}>
        <Box>
          <Avatar
            alt="Remy Sharp"
            src="/assets/images/robot.png"
            sx={{ width: 200, height: 200, margin: "auto" }}
          />
        </Box>

        {field === "view" && (
          <UserInfo userInfo={userInfo} setField={setField} loading={loading} />
        )}

        {field === "edit" && (
          <UserEdit
            userInfo={userInfo}
            setSnackbarState={setSnackbarState}
            getData={getData}
            setField={setField}
          />
        )}

        {field === "editPass" && (
          <UserPasswordEdit
            setField={setField}
            setSnackbarState={setSnackbarState}
          />
        )}
      </Box>
      <Toast snackbarState={snackbarState} close={close} />
    </Paper>
  );
}

export default UserDetail;
