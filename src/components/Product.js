import './index.css';
import './Product.css'

function Product({title,price,description,category,image}) {
  return (
   <div className="products-card">
    <div className="products">
     <div className="product-info"> 
      <p> <h5>{title} </h5>
      <h5>{description}</h5></p>
         <h4>{category}</h4>
          <h5>{price}$</h5>
          </div>
              <div className="product-image">
                 <img src={image}/>
              </div>
    </div>
    </div>
  );
}





export default Product;
