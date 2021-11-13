import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Navigation from "../Shared/Navigation/Navigation";
import MyOrderList from "./MyOrderList/MyOrderList";

const Myorder = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/myorders/${user.email}`)
      .then((res) => res.json())
      .then((result) => setMyOrders(result));
  }, [user.email]);

  return (
    <div>
      <Navigation />
      <h2>My Order List </h2>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {myOrders.map((myoder) => (
              <MyOrderList
                control={control}
                setControl={setControl}
                myorder={myoder}
              ></MyOrderList>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Myorder;
