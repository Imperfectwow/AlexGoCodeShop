import {
  AppBar,
  Badge,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";

import React from "react";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/myLogo.jpg";
import { useState } from "react";
import useStyles from "./styles";

const NavBar = ({ products, setProducts }) => {
  const filterHandler = (event) => {
    event.target.value === "All"
      ? setProducts(products)
      : setProducts(
          products.filter((product) => product.category === event.target.value)
        );
  };

  const categoriesList = products
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  const [categories] = useState(categoriesList);

  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="Alexander shop"
              height="45px"
              className={classes.image}
            />
            Alexander Shop
          </Typography>
          <label>Categories</label>
          <select onChange={filterHandler}>
            <option key={"1"}>All</option>
            {categoriesList.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
