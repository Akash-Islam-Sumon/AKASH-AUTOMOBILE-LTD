import { Button, Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { NavLink } from "react-router-dom";

const Product = ({ product }) => {
  const { name, img, description } = product;
  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="200" image={img} alt="Car image" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <NavLink
            style={{ textDecoration: "none" }}
            to={`/booking/${product._id}`}
          >
            <Button style={{ marginBottom: "30px" }} variant="contained">
              READ MORE
            </Button>
          </NavLink>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Product;
