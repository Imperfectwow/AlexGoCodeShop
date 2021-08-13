import { Grid } from "@material-ui/core";
import Header from "./components/Header";
import Products from "./components/Products";
import React from "react";
import productsList from "./products";
import { useState } from "react";

const App = () => {
  const [products, setProducts] = useState(productsList);
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <Grid container direction="column">
      <Grid item> this is where the header will be </Grid>
      <Grid item container>
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={8} />
      </Grid>
      <Grid item xs={0} sm={2} />
    </Grid>
  );
};

export default App;
