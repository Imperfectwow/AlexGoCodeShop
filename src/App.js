import Cart from "./components/Basket/Basket.jsx";
import Content from "./components/Content";
import { Fragment } from "react";
import Header from "./components/Header";
import PriceSlider from "./components/PriceSlider/PriceSlider.jsx";
import RangeSlider from "./components/PriceSlider/PriceSlider.jsx";
import React from "react";
import productsList from "./products";
import styles from "./index.css";
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

  const [val, setVal] = useState([30, 40]);
  const updateRange = (e, data) => {
    setVal(data);
  };

  return (
    <div>
      <Fragment>
        {cartIsShown && <Cart onClose={HideCartHandler} />}
        <Header
          products={products}
          setProducts={setFilteredProducts}
          onShowCart={ShowCartHandler}
        />
        {/* <div style={{ width: 300, margin: 25 }}> */}
        <RangeSlider />
        {/* </div> */}
        <div>
          <Content products={filteredProducts} />
        </div>
      </Fragment>
    </div>
  );
};

export default App;
