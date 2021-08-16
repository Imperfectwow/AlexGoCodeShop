import React from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 450,
    margin:30,
    marginTop:70,
    marginBottom:30,
    marginLeft:450,
  background: 'white',
  border: 0,
  borderRadius: 3,
  color: 'blue',
  height: 48,
  padding: '0 15px',
  },
});

function valuetext(value) {
  return `${value}$`;
}

 function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Price Range
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}

export default RangeSlider