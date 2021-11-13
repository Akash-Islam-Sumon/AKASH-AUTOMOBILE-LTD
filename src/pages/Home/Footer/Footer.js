import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      style={{ height: "300px", backgroundColor: "#89B8F5" }}
      sx={{ flexGrow: 1 }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <h2>AKASH AUTOMOBBILE LTD</h2>
          <hr />
          <p>Uttara, Dhaka-1230 ,Bangladesh</p>
          <p>Email : akash69.net@gmail.com</p>
          <p>Phone : 01997122653</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <h2>LINK</h2>
          <hr />
          <ul style={{ display: "flex", flexDirection: "column" }}>
            <NavLink
              style={{ listStyleType: "none", textDecoration: "none" }}
              to="/home"
            >
              HOME
            </NavLink>
            <NavLink
              style={{ listStyleType: "none", textDecoration: "none" }}
              to="/explore"
            >
              EXPLORE
            </NavLink>
            <NavLink
              style={{ listStyleType: "none", textDecoration: "none" }}
              to="/register"
            >
              REGISTER
            </NavLink>
            <NavLink
              style={{ listStyleType: "none", textDecoration: "none" }}
              to="/login"
            >
              LOGIN
            </NavLink>
            <NavLink
              style={{ listStyleType: "none", textDecoration: "none" }}
              to="/addreviews"
            >
              REVIEWS
            </NavLink>
          </ul>
        </Grid>

        <Grid item xs={12} md={4}>
          <h2>FOLLOWING US</h2>
          <hr />
          <img
            style={{ height: "60px", width: "60px" }}
            src="https://i.ibb.co/p41KPX9/facebook-icon-preview-400x400.png"
            alt=""
          />
          <img
            style={{ height: "50px", width: "50px" }}
            src="https://i.ibb.co/ZLjjrxG/instagram-logo-circle-11549679754rhbcorxntv.png"
            alt=""
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
