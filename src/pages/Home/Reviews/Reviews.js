import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Review from "./Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  console.log(reviews);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div>
      <h3 style={{ margin: "70px", marginBottom: "100px", color: "tomato" }}>
        CLIENT REVIEWS{" "}
      </h3>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {reviews.slice(-3).map((review) => (
              <Review review={review}></Review>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Reviews;
