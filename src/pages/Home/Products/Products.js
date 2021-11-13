import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Product from "./product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((result) => setProducts(result));
  }, []);
  return (
    <div>
      <h3 style={{ margin: "80px", color: "violet" }}>OUR NEW PRODUCTS</h3>
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
