const prodStyle = { display: "flex", justifyContent: "center", fontSize: "20px"};

function Product({title,price,description,category,image}) {
  return (
    <div className="prodStyle">
    <div className="App">
    <h2>{title}</h2>
    <h4> {category}</h4>
    <img src={image}/>
    <p>{price}</p>
    <h4>{description}</h4>   
    </div>
</div>
  );
}





export default Product;
