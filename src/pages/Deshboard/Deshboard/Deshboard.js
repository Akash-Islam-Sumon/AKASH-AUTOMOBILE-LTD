import * as React from "react";
import Box from "@mui/material/Box";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { Button } from "@mui/material";

import MakeAdmin from "../MakeAdmin/MakeAdmin";
import "./DeshBoard.css";
import useAuth from "../../../Hooks/useAuth";
import DeshBoardHome from "./DeshBoardHome";
import Payment from "../Payment/Payment";
import MyOrder from "../MyOrder/MyOrder";
import Review from "./Review/Review";
import ManageProduct from "../ManageProduct/ManageProduct";
import AddProduct from "../AddProduct/AddProduct";

const Deshboard = () => {
  const { logOut, admin } = useAuth();
  let { path, url } = useRouteMatch();
  return (
    <div>
      <div className="deshboard">
        <h3>DeshBoard</h3>
      </div>
      <div className="row">
        <div className="col-md-2 deshborad-left">
          <Link style={{ textDecoration: "none" }} to="/home">
            <Button style={{ width: "70%", margin: "10px" }} variant="outlined">
              HOME
            </Button>
          </Link>
          {!admin && (
            <Box>
              <Link style={{ textDecoration: "none" }} to={`${url}`}>
                <Button
                  style={{ width: "70%", margin: "10px" }}
                  variant="outlined"
                >
                  DESHBOARD
                </Button>
              </Link>
              <Link style={{ textDecoration: "none" }} to={`${url}/payment`}>
                <Button
                  style={{ width: "70%", margin: "10px" }}
                  variant="outlined"
                >
                  PAYMENT
                </Button>
              </Link>
              <Link style={{ textDecoration: "none" }} to={`${url}/myorder`}>
                <Button
                  style={{ width: "70%", margin: "10px" }}
                  variant="outlined"
                >
                  MYORDER
                </Button>
              </Link>
              <Link style={{ textDecoration: "none" }} to={`${url}/review`}>
                <Button
                  style={{ width: "70%", margin: "10px" }}
                  variant="outlined"
                >
                  REVIEW
                </Button>
              </Link>
            </Box>
          )}
          {admin && (
            <Box>
              <Link style={{ textDecoration: "none" }} to={`${url}`}>
                <Button
                  style={{ width: "70%", margin: "10px" }}
                  variant="outlined"
                >
                  DESHBOARD
                </Button>
              </Link>
              <Link style={{ textDecoration: "none" }} to={`${url}/makeadmin`}>
                <Button
                  style={{ width: "70%", margin: "10px" }}
                  variant="outlined"
                >
                  MAKE ADMIN
                </Button>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to={`${url}/manageproduct`}
              >
                <Button
                  style={{ width: "70%", margin: "10px" }}
                  variant="outlined"
                >
                  MANAGE ALL ORDERS
                </Button>
              </Link>
              <Link style={{ textDecoration: "none" }} to={`${url}/addproduct`}>
                <Button
                  style={{ width: "70%", margin: "10px" }}
                  variant="outlined"
                >
                  ADD PRODUCTS
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
        <div className="col-md-10">
          <Switch>
            <Route exact path={`${path}`}>
              <DeshBoardHome />
            </Route>
            <Route path={`${path}/payment`}>
              <Payment />
            </Route>
            <Route path={`${path}/myorder`}>
              <MyOrder />
            </Route>
            <Route path={`${path}/review`}>
              <Review />
            </Route>
            <Route path={`${path}/makeadmin`}>
              <MakeAdmin />
            </Route>
            <Route path={`${path}/manageproduct`}>
              <ManageProduct />
            </Route>
            <Route path={`${path}/addproduct`}>
              <AddProduct />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Deshboard;
