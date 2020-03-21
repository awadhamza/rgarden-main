import React, { Component } from 'react';
import backgroundImage from '../../Media/garden1.jpeg';
import './Landing.css';
import Button from '@material-ui/core/Button';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { makeStyles } from '@material-ui/core/styles';

export default function Landing() {

  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  return(
      <div class="main">
        <div class="top_banner">
          <img src={backgroundImage} />
          <div class="banner_text">
            <div class="big_text">
              R'Garden?
            </div>
            <br/>
            <div class="small_text">
              Yes. <b>Yours</b> too.
            </div>

          </div>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<DoubleArrowIcon />}
          >
            find out more
          </Button>
        </div>
      </div>
  );
}
