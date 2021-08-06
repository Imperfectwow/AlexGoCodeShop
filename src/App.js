import './App.css';

import Products from './components/Products';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Alexander
        </p>
       <Products/>
  
      </header>
    </div>
  );
}

export default App;
