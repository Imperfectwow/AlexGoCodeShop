function Product({ title, price, description, category, image, id }) {
  return (
    <div className="product-card" key={id}>
      <div className="product-image">
        <img src={image} />
      </div>

      <div className="product-info">
        <h1>{category}</h1>
        <h5>{title}</h5>
        <h5>{description}</h5>
        <h6>{price}$</h6>
      </div>
    </div>
  );
}

export default Product;
