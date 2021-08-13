import CategoriesSort from "./CategoriesSort/CategoriesSort";
import SortPopup from "./SortPopup/SortPopup";
import { useState } from "react";

const Header = ({ products, setProducts }) => {
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
  return (
    <nav>
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
    </nav>
  );
};
export default Header;
