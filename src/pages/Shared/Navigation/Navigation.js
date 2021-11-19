import { Box } from "@mui/system";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{ padding: "20px" }}>
            AKASH AUTO MOBILE LTD.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="home">
                HOME
              </Nav.Link>
              <Nav.Link as={NavLink} to="explore">
                EXPLORE
              </Nav.Link>
              <Nav.Link as={NavLink} to="contact">
                CONTACT US
              </Nav.Link>
              <Nav.Link as={NavLink} to="deshboard">
                DESHBOARD
              </Nav.Link>

              {user.email ? (
                <Box>
                  <label>
                    {" "}
                    <h6 style={{ color: "white" }}>
                      {user.email || user.displayName}
                    </h6>
                  </label>
                  <button onClick={logOut}>LOGOUT</button>
                </Box>
              ) : (
                <Box style={{ display: "flex" }}>
                  <Nav.Link as={NavLink} to="register">
                    REGISTER
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="login">
                    LOGIN
                  </Nav.Link>
                </Box>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;

// //  <Box sx={{ flexGrow: 1 }}>
// <AppBar position="static">
// <Toolbar>
//   <IconButton
//     size="large"
//     // edge="start"
//     color="inherit"
//     aria-label="menu"
//     sx={{ mr: 2 }}
//   >
//     <MenuIcon />
//   </IconButton>
//   <Typography
//     style={{ padding: "35px" }}
//     variant="h6"
//     component="div"
//     sx={{ flexGrow: 1 }}
//   >
//     AKASH AUTO MOBILE LTD.
//   </Typography>
//   <NavLink style={{ textDecoration: "none" }} to="/home">
//     <Button style={{ color: "white" }} color="inherit">
//       HOME
//     </Button>
//   </NavLink>
//   <NavLink style={{ textDecoration: "none" }} to="/explore">
//     <Button style={{ color: "white" }} color="inherit">
//       EXPLORE
//     </Button>
//   </NavLink>
//   <NavLink style={{ textDecoration: "none" }} to="/myorder">
//     <Button style={{ color: "white" }} color="inherit">
//       MY ORDER
//     </Button>
//   </NavLink>
//   <NavLink style={{ textDecoration: "none" }} to="/addreviews">
//     <Button sx={{ color: "white" }} color="inherit">
//       ADDREVIEWS
//     </Button>
//   </NavLink>

//   <NavLink style={{ textDecoration: "none" }} to="/register">
//     <Button style={{ color: "white" }} color="inherit">
//       REGISTER
//     </Button>
//   </NavLink>

//   {user?.email ? (
//     <Box>
//       <NavLink style={{ textDecoration: "none" }} to="/deshboard">
//         <Button style={{ color: "white" }} color="inherit">
//           DESHBOARD
//         </Button>
//       </NavLink>
//       <Button
//         onClick={logOut}
//         style={{ color: "white" }}
//         color="inherit"
//       >
//         LOGOUT
//       </Button>
//     </Box>
//   ) : (
//     <NavLink style={{ textDecoration: "none" }} to="/login">
//       <Button
//         onClick={logOut}
//         style={{ color: "white" }}
//         color="inherit"
//       >
//         LOGIN
//       </Button>
//     </NavLink>
//   )}
// </Toolbar>
// </AppBar>
// </Box>
