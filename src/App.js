import { NavBar, Products } from "./components";
import { useEffect, useState } from "react";

import React from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  return (
    <div>
      <NavBar products={products} setProducts={setFilteredProducts} />
      <Products products={products} />
    </div>
  );
};

export default App;
