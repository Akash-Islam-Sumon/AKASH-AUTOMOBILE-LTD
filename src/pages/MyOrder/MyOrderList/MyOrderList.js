import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const MyOrderList = ({ myorder }) => {
  const { img, name, _id, control, setControl } = myorder;
  const handleOrderCancle = (_id) => {
    fetch(`https://safe-taiga-87363.herokuapp.com/cancelorder/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount) {
          setControl(!control);
          reload();
        }
      });
    alert("Are you sure for Delete ???");
  };
  const reload = () => {
    window.location.reload();
  };

  return (
    <>
      <Grid item xs={12} md={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={img}
              alt="Car image"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Author : {name}
              </Typography>
              <Button
                onClick={() => handleOrderCancle(_id)}
                variant="contained"
              >
                Cancle
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default MyOrderList;
