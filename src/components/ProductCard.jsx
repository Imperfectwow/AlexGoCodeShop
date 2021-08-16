import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { CardMedia } from '@material-ui/core';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useStyles from './ProductCard'

// const useStyles = makeStyles({
//   root: {
 
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });




const ProductCard=props=>{

    const classes = useStyles();
    const{ title, price, description, category, image, id }=props;

    return(
        <Card className={classes.root}>
        <CardActionArea>
         <CardMedia className={classes.media}
         image={props.image} title={props.title}/>
          <CardContent>
          <div className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            </div>
            <Typography gutterBottom variant="h5" component="h2" >
                 {price}$
              </Typography>
              <Typography dangerouslySetInnerHTML={{ __html: props.description }} variant="body2" color="textSecondary" component="p" />
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button color="primary" variant="contained">Add To Basket</Button>
        </CardActions>
      </Card>
    );
}

export default ProductCard;