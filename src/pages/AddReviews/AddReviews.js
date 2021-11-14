import { Box } from "@mui/system";
import React from "react";
import "./AddReviews.css";
import { useForm } from "react-hook-form";
import Navigation from "../Shared/Navigation/Navigation";

const AddReviews = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("https://safe-taiga-87363.herokuapp.com/addreviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    alert("Thank you for your reviews");
  };

  return (
    <Box className="form-page">
      <Navigation />
      <h2 style={{ marginTop: "50px" }}>Please Add Your Reviews</h2>
      <Box className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="description"
            {...register("img")}
            placeholder="Enter your img link"
          />
          <input {...register("name")} placeholder="Enter your name" />

          <input
            type="description"
            {...register("description")}
            placeholder="Enter your description"
          />
          <input
            type="number"
            {...register("rating", { min: 0, max: 5 })}
            placeholder="Give rating"
          />

          <input
            style={{
              background: "#F40FDF",
              borderRadius: "8px",
              color: "white",
            }}
            type="submit"
          />
        </form>
      </Box>
    </Box>
  );
};

export default AddReviews;
