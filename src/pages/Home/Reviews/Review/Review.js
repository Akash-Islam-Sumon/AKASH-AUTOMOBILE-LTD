import { Grid } from "@mui/material";
import React from "react";

const Review = ({ review }) => {
  const { name, img, description } = review;
  return (
    <Grid item xs={12} md={4}>
      <img
        style={{ borderRadius: "70%", height: "50%", width: "50%" }}
        src={img}
        alt=""
      />
      <h2>{name}</h2>
      <p style={{ marginBottom: "70px" }}>{description}</p>
    </Grid>
  );
};

export default Review;
