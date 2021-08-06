function Product(props2) {
  return (
    <div>
      <h5>{props2.title}</h5>
      <img src={props2.src} width="200px"></img>
      <h6>{props2.price}</h6>
    </div>
  );
}

export default Product;
