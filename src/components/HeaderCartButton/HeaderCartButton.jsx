import { Button, ButtonBase } from '@material-ui/core'

import CartIcon from './CartIcon'
import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import classes from './HeaderCartButton';

const HeaderCartButton=(props)=> {
    debugger
    return (
    <Button className={classes.button} onClick={props.onClick}>
    <span className={classes.icon}>
        <ShoppingCartIcon/>
    </span>
    <span>Your Cart</span>
    </Button>
    )
}

export default HeaderCartButton
