import Product from "./Product"

function Products({products}){

  return (
    <div className="App">
      <header className="App-header">
      {products.map((products)=>(
        <Product
         key={products.id}
         title={products.title}
         image={products.image}
         description={products.description}
         category={products.category}
         price={products.price}
         />
        
      ))}
      </header>
      </div>
      );
}

export default Products;