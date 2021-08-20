import { Grid } from "@material-ui/core";
import Product from "./../Product/Product";
import React from "react";

const products = [
  { id: 1, name: "shoes", description: "running shoes", price: "$5" },
  { id: 2, name: "macbook", description: "new pc", price: "$10" },
];
const Products = ({ products }) => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={2}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
