import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Booked from "./Booked/Booked";

const Booking = () => {
  const [booking, setBooking] = useState([]);
  console.log(booking);
  const { cardId } = useParams();
  useEffect(() => {
    fetch(`https://safe-taiga-87363.herokuapp.com/singleProduct/${cardId}`)
      .then((res) => res.json())
      .then((result) => setBooking(result));
  }, []);
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {booking.map((booked) => (
            <Booked booked={booked}></Booked>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Booking;
