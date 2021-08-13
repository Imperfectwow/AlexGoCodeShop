import Header from './components/Header';
import Products from './components/Products';
import products from './products';
import productsList from './products';
import { useState } from 'react';

const App=()=> {
  const[products,setProducts]=useState(productsList)
  const[filteredProducts,setFilteredProducts]=useState(products)

  return(
    <div>
        <Header products={products} setProducts={setFilteredProducts}/>
        <Products products={filteredProducts}/>
        
    </div>
  );
}

export default App;
