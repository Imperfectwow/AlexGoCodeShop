import Basket from "./components/Basket/Basket.jsx";
import Cart from "./components/Basket/Basket.jsx";
import Content from "./components/Content";
import { Grid } from "@material-ui/core";
import Header from "./components/Header";
import React from "react";
import productsList from "./products";
import { useState } from "react";

const App = () => {
  const [products, setProducts] = useState(productsList);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cartIsShown, setCartIsShown] = useState(false);

  const ShowCartHandler = () => {
    setCartIsShown(true);
  };
  const HideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Grid container direction="column">
      <Grid item>
        {cartIsShown && <Cart onClose={HideCartHandler} />}
        <Header
          products={products}
          setProducts={setFilteredProducts}
          onShowCart={ShowCartHandler}
        />
      </Grid>

      <Grid item container>
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={8}>
          <div>
            <Content products={filteredProducts} />
          </div>
        </Grid>

        <Grid item xs={0} sm={2} />
      </Grid>
    </Grid>
  );
};

export default App;
