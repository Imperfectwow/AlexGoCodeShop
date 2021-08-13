import { Button, ButtonGroup } from '@material-ui/core';

function Product({ title, price, description, category, image, id }) {
  return (
    <div className="product-card" key={id}>
      <div className="product-image">
        <img src={image} alt={title}/>
      </div>

      <div className="product-info">
        <h1>{category}</h1>
        <h5>{title}</h5>
        <h5>{description}</h5>
        <h6>{price}$</h6>
        <Button color="primary" variant="contained">Add To Basket</Button>
      </div>
    </div>
  );
}

export default Product;
