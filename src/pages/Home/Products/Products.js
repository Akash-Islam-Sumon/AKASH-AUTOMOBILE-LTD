import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Product from "./product/Product";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://safe-taiga-87363.herokuapp.com/exploreproduct")
      .then((res) => res.json())
      .then((result) => setProducts(result));
  }, []);
  return (
    <div>
      <div>
        <Bounce right>
          <h3 style={{ marginTop: "80px", color: "violet" }}>
            OUR NEW PRODUCTS
          </h3>
        </Bounce>
      </div>
      <div>
        <Fade left>
          <h4 style={{ marginBottom: "40px", color: "Blue" }}>
            Happy journy with us.
          </h4>
        </Fade>
      </div>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {products.slice(0, 6).map((product) => (
              <Product product={product}></Product>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Products;
