import Product from "./Product"

function Products({products}){

  return (
    <section className="products">
 
      {products.map((product)=>(
        <Product
         id={product.id}
         title={product.title}
         image={product.image}
         description={product.description}
         category={product.category}
         price={product.price}
         />
    
      ))}
    </section>
      );
}

export default Products;