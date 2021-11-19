import "./Booked.css";
import React from "react";
import { useForm } from "react-hook-form";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";

const Booked = ({ booked }) => {
  const { name, img, description, price, cc, madeby } = booked;
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("https://safe-taiga-87363.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    alert("Order successfully done !!");
  };
  return (
    <div>
      <div style={{ backgroundColor: "#95BEF2" }}>
        <div>
          <div class="row">
            <div class="col col-md-7">
              <Card
                sx={{
                  maxWidth: 545,
                  marginTop: "50px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="400"
                    image={img}
                    alt="Car image"
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {description}
                    </Typography>
                    <Typography variant="h4" color="red">
                      Price : {price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      Cc : {cc}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      Made In : {madeby}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div class="col col-md-4">
              <h2 className="mt-5">Full Fill Form For Order</h2>
              <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name")}
                  defaultValue={user?.name}
                  placeholder="Enter your name"
                />
                <input
                  {...register("email")}
                  Value={user.email}
                  placeholder="Enter your email"
                />
                <input {...register("img")} defaultValue={img} />
                <input
                  {...register("date")}
                  type="date"
                  placeholder="Enter your delevary date"
                />
                <input {...register("phone")} placeholder="Enter your phone" />
                <br />
                <input
                  style={{ marginBottom: "10px", backgroundColor: "#3F8FF7" }}
                  type="submit"
                />
                <button>
                  {" "}
                  <Link style={{ textDecoration: "none" }} to="/home">
                    BACK HOME
                  </Link>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booked;
