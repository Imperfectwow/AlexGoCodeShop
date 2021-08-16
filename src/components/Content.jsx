import {Grid} from "@material-ui/core";
import ProductCard from './ProductCard'
import React from 'react'

function Content({products}) {
    return (
    <Grid container spacing={2}>
        {products.map((product)=>(
            <Grid item xs={12} sm={4}>
            <ProductCard 
            id={product.id}
            title={product.title}
            image={product.image}
            description={product.description}
            category={product.category}
            price={product.price}
            />
        </Grid>
        ))}
        
    </Grid>)
};

export default Content
