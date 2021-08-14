import { Button } from '@material-ui/core';
import Modal from './../../UI/Modal'
import React from 'react'
import classes from './Basket'

const Cart = (props) => {
    const cartItems = (
      <ul className={classes['cart-items']}>
        {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    );
  
    return (
      <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>35.62</span>
        </div>
        <div className={classes.actions}>
          <Button variant="contained" color="secondary" className={classes['button--alt']} onClick={props.onClose}>
            Close
          </Button>
          <Button  variant="contained" color="secondary" className={classes.button}>Order</Button>
        </div>
      </Modal>
    );
  };
  
  export default Cart;
