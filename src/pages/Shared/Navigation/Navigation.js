import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            style={{ padding: "35px" }}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            AKASH AUTO MOBILE (PVT.) LTD.
          </Typography>
          <NavLink style={{ textDecoration: "none" }} to="/home">
            <Button style={{ color: "white" }} color="inherit">
              HOME
            </Button>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/explore">
            <Button style={{ color: "white" }} color="inherit">
              EXPLORE
            </Button>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/myorder">
            <Button style={{ color: "white" }} color="inherit">
              MY ORDER
            </Button>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/addreviews">
            <Button sx={{ color: "white" }} color="inherit">
              ADDREVIEWS
            </Button>
          </NavLink>

          <NavLink style={{ textDecoration: "none" }} to="/register">
            <Button style={{ color: "white" }} color="inherit">
              REGISTER
            </Button>
          </NavLink>

          {user?.email ? (
            <Box>
              <NavLink style={{ textDecoration: "none" }} to="/deshboard">
                <Button style={{ color: "white" }} color="inherit">
                  DESHBOARD
                </Button>
              </NavLink>
              <Button
                onClick={logOut}
                style={{ color: "white" }}
                color="inherit"
              >
                LOGOUT
              </Button>
            </Box>
          ) : (
            <NavLink style={{ textDecoration: "none" }} to="/login">
              <Button
                onClick={logOut}
                style={{ color: "white" }}
                color="inherit"
              >
                LOGIN
              </Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
