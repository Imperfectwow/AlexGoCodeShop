import { CardHeader, CardMedia, IconButton } from '@material-ui/core';

import { Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import products from './../products';

const useStyles = makeStyles({
  root: {
 
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});




const ProductCard=props=>{

    const classes = useStyles();
    const{ title, price, description, category, image, id }=props;

    return(
        <Card className={classes.root} key={id}>
        <CardActionArea>
         <CardMedia
            component="img"
            alt={title}
            image={image}
            title={title}
         />
          <CardContent>
            <Typography gutterBottom variant="body1" component="h1">
              {title}
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              {description}
            </Typography>
            <Typography variant="body1" color="primary" component="animateMotion" >
                 {price}$
              </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Add to Card
          </Button>
          <Button size="small" color="primary">
            Add to wishlist
          </Button>
        </CardActions>
      </Card>
    );
}

export default ProductCard;