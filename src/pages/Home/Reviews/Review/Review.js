import { Grid } from "@mui/material";
import React from "react";
import Rating from "react-rating";

const Review = ({ review }) => {
  const { name, img, description, rating } = review;
  return (
    <Grid item xs={12} md={4}>
      <img
        style={{ borderRadius: "70%", height: "50%", width: "50%" }}
        src={img}
        alt=""
      />
      <br />

      <Rating
        initialRating={rating}
        style={{ color: "gold", margin: "10px" }}
        emptySymbol="far fa-star"
        fullSymbol="fas fa-star"
        readonly
      ></Rating>

      <h2>{name}</h2>
      <p style={{ marginBottom: "70px" }}>{description}</p>
    </Grid>
  );
};

export default Review;
