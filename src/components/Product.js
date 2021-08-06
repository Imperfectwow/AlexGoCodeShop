

function Product({title,price,description,category,image}) {
  return (
   
    <div className="App">
    <h1>{title}</h1>
    <h4> {category}</h4>
    <img src={image}/>
    <p>{price}$</p>
    <h4>{description}</h4>   
    </div>
  );
}





export default Product;
