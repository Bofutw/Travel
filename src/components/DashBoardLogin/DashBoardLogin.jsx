import React, { useContext, useEffect, useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, child, get, set } from "firebase/database";
import firebase from "firebase/compat/app"

import { getadminloginpage, getfirebaseinfo } from "./DBoardLoginInfo";
import Dashboard from "../Dashboard/Dashboard";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        EEit36 Travel
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function DashBoardLogin({ isadmin, setIsAdmin, setAdminLoginPage, adminloginpage }) {



  //


  let navigate = useNavigate();



  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const cnoditiontofirebse = await getfirebaseinfo(data.get("email"), data.get("password"));
    console.log(cnoditiontofirebse);
    setIsAdmin(cnoditiontofirebse)
    //console.log(JSON.stringify(getdatabaseemailpassword) === JSON.stringify({ email: data.get("email"), password: data.get("password") }));

    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });

  };

  //判斷登入是否在登入畫面
  useEffect(() => {
    const isloginpage = () => {
      // setAdminLoginPage("true")
      localStorage.setItem("adminloginpage", "true")
    }

    isloginpage();

  }, [])


  //判斷登入
  useEffect(() => {
    const admincondition = () => {
      if (isadmin === "true") {
        localStorage.setItem("isadmin", true);
        navigate("/dashboard");
        window.location.reload();
      } else {
        return false;
      }
    };
    admincondition();

  }, [handleSubmit, isadmin]);


  //預計放firebase realtimedatabase 判斷
  // useEffect(() => {

  // }, [])

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#a5d6a7" }}>
            <SupervisorAccountIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            後台系統
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"

              error={false}
              required
              fullWidth

              id="email"
              label="帳號"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required

              fullWidth
              name="password"
              label="密碼"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#a5d6a7",
                "&:hover": { backgroundColor: "#94af76", color: "white", boxShadow: ' 3px 7px #888888' },
                color: "white",
              }}
            >
              登入
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}


