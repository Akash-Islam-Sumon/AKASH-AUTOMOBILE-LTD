import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { Button } from "@mui/material";
import AddProduct from "../AddProduct/AddProduct";
import ManageProduct from "../ManageProduct/ManageProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import useAuth from "../../../Hooks/useAuth";

const drawerWidth = 250;

function Deshboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { logOut, user, admin } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <h4>ADMIN</h4>
      {user.email ? (
        <h5>{user.email}</h5>
      ) : (
        <h2 className="text-danger">LOG OUT</h2>
      )}

      <Link style={{ textDecoration: "none" }} to="/home">
        <Button style={{ width: "70%", margin: "10px" }} variant="outlined">
          HOME
        </Button>
      </Link>
      {admin && (
        <Box>
          {" "}
          <Link style={{ textDecoration: "none" }} to={`${url}/addproduct`}>
            <Button style={{ width: "70%", margin: "10px" }} variant="outlined">
              ADD PRODUCT
            </Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to={`${url}/manageproduct`}>
            <Button style={{ width: "70%", margin: "10px" }} variant="outlined">
              MANAGE ORDER
            </Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to={`${url}/makeadmin`}>
            <Button style={{ width: "70%", margin: "10px" }} variant="outlined">
              MAKE ADMIN
            </Button>
          </Link>
        </Box>
      )}
      <Button
        onClick={logOut}
        style={{ width: "70%", margin: "10px" }}
        variant="outlined"
      >
        LOG OUT
      </Button>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DESHBOARD
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route path={`${path}/addproduct`}>
            <AddProduct />
          </Route>
          <Route path={`${path}/manageproduct`}>
            <ManageProduct />
          </Route>
          <Route path={`${path}/makeadmin`}>
            <MakeAdmin />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Deshboard.propTypes = {
  window: PropTypes.func,
};

export default Deshboard;
