import React, { useState } from "react";
import "./LogIn.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Alert, Button, TextField } from "@mui/material";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";

const LogIn = () => {
  const { logInUser, user } = useAuth();
  const [loginData, setLoginData] = useState({});

  const location = useLocation();
  const history = useHistory();

  const handleOnBlur = (e) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    const updateData = { ...loginData };
    updateData[field] = value;
    setLoginData(updateData);
    console.log(updateData);
  };

  const handleLogInSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    logInUser(loginData.email, loginData.password, location, history);
  };
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={8} md={6}>
          <h2 style={{ marginTop: "100px" }}>Login</h2>
          <form onSubmit={handleLogInSubmit}>
            <TextField
              type="email"
              name="email"
              onBlur={handleOnBlur}
              sx={{ width: "70%", m: 1 }}
              id="standard-basic"
              label="Your email"
              variant="standard"
            />
            <TextField
              sx={{ width: "70%", m: 1 }}
              name="password"
              onBlur={handleOnBlur}
              id="standard-basic"
              type="password"
              label="Your password"
              variant="standard"
            />
            <Button
              sx={{ width: "70%", m: 1 }}
              type="submit "
              variant="contained"
            >
              Login
            </Button>
          </form>
          <NavLink style={{ textDecoration: "none" }} to="/register">
            <Button variant="text">New User ? please register</Button>
          </NavLink>
          {user?.email && <Alert severity="success">Login success !!!</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            style={{ height: "500px" }}
            src="https://i.ibb.co/F6J7LVp/login.jpg"
            alt=""
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LogIn;
