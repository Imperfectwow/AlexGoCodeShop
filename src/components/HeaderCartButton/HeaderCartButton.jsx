import { Button } from '@material-ui/core'
import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import classes from './HeaderCartButton';

const HeaderCartButton=(props)=> {
    debugger
    return (
    <Button className={classes.button} onClick={props.onClick}>
    <div className={classes.icon}>
        <ShoppingCartIcon/>
    </div>
    Your Cart
    </Button>
    )
}

export default HeaderCartButton
