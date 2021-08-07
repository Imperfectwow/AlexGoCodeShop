import Products from './components/Products';
import products from './products';

function App() {

  return(
    <div>
        <Products products={products}/>
    </div>
  );
}

export default App;
