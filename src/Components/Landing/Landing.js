import React, { Component } from 'react';
import backgroundImage from '../../Media/garden6.jpeg';
import './Landing.css';
import Button from '@material-ui/core/Button';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import plant_icon from '../../Media/plant-icon.png';

// <div class="top_banner">
//   <img src={backgroundImage} />
//   <div class="banner_text">
//     <div class="big_text">
//       R'Garden?
//     </div>
//     <br/>
//     <div class="small_text">
//       Yes. <b>Yours</b> too.
//     </div>
//
//   </div>
//   <Button
//     variant="contained"
//     color="primary"
//     size="large"
//     className={classes.button}
//     startIcon={<DoubleArrowIcon />}
//   >
//     how to get started
//   </Button>
// </div>

export default function Landing() {

  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  return(
      <div class="main">
        <div class="mainT"> R'Garden? </div>
        <div class="subT">Yes. <b>YOURS</b> too! </div>

        <Grid container spacing={3}>
          <Grid item xs={4}>
            <div class="landing-icons">
              <img src={plant_icon} />
            </div>
          </Grid>
          <Grid item xs={4}>
          <div class="landing-icons">
            <img src={plant_icon} />
          </div>
          </Grid>
          <Grid item xs={4}>
          <div class="landing-icons">
            <img src={plant_icon} />
          </div>
          </Grid>
        </Grid>

      </div>
  );
}
