import './App.css';

import Product from './components/Product';
import Products from './components/Products';
import products from './products';

function App() {

 
  return(
    <div>
      <header>
        <Products products={products}/>
      </header>
    </div>
  );
}

export default App;
