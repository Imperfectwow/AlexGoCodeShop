import { AppBar, Toolbar, Typography } from "@material-ui/core";

import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";
import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SortPopup from "./SortPopup/SortPopup";
import { makeStyles } from "@material-ui/core";
import products from "./../products";
import { useState } from "react";

//rfce

const useStyles = makeStyles(() => ({
  typegraphyStyles: {
    flex: 1,
  },
}));

const Header = (props) => {
  const filterHandler = (event) => {
    event.target.value === "All"
      ? props.setProducts(products)
      : props.setProducts(
          props.products.filter(
            (product) => product.category === event.target.value
          )
        );
  };

  const categoriesList = products
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  const [categories] = useState(categoriesList);
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <div className="sort">
          <div className="collection-sort">
            <label>Categories:</label>
            <select onChange={filterHandler}>
              <option key={"1"}>All</option>
              {categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </div>
          <SortPopup />
        </div>

        <Typography className={classes.typegraphyStyles}>
          Welcome to Alexander Shop
        </Typography>
        <HeaderCartButton onClick={props.onShowCart} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
