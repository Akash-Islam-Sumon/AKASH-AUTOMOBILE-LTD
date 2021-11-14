import React, { useState } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Alert, Button, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import useAuth from "../../../../../Hooks/useAuth";

const Register = () => {
  const { registerWithEmailAndPassword, user, error } = useAuth();
  const [loginData, setLoginData] = useState({});

  const handleOnBlur = (e) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    const updateValue = { ...loginData };
    updateValue[field] = value;
    setLoginData(updateValue);
  };

  const handleLogInSubmit = (e) => {
    e.preventDefault();
    if (loginData.password1 !== loginData.password2) {
      alert("Ops ......! Password does not match");
    }
    registerWithEmailAndPassword(
      loginData.email,
      loginData.password1,
      loginData.name
    );
    alert("done register");
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={8} md={6}>
          <h2 style={{ marginTop: "100px" }}>PLEASE REGISTER </h2>
          <form onSubmit={handleLogInSubmit}>
            <TextField
              name="name"
              type="text"
              onBlur={handleOnBlur}
              sx={{ width: "70%", m: 1 }}
              id="standard-basic"
              label="Your name"
              variant="standard"
            />
            <TextField
              name="email"
              type="email"
              onBlur={handleOnBlur}
              sx={{ width: "70%", m: 1 }}
              id="standard-basic"
              label="Your email"
              variant="standard"
            />
            <TextField
              sx={{ width: "70%", m: 1 }}
              name="password1"
              onBlur={handleOnBlur}
              id="standard-basic"
              type="password"
              label="Your password"
              variant="standard"
            />
            <TextField
              sx={{ width: "70%", m: 1 }}
              name="password2"
              onBlur={handleOnBlur}
              id="standard-basic"
              type="password"
              label="Re-Type your password"
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
          <NavLink style={{ textDecoration: "none" }} to="/login">
            <Button variant="text">Already Registred ? Please login</Button>
          </NavLink>
          {user?.email && (
            <Alert severity="success">Thank you for sccessfully Register</Alert>
          )}
          {error && <Alert severity="error">{error}</Alert>}
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

export default Register;
