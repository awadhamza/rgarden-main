import React, { Component } from 'react';
import backgroundImage from '../../Media/garden6.jpeg';
import './Landing.css';
import Button from '@material-ui/core/Button';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import plant_icon from '../../Media/plant-icon.png';
import team_icon from '../../Media/team-icon.png';
import activities_icon from '../../Media/activities-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagic } from '@fortawesome/free-solid-svg-icons';

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

function changeBackground() {
  let imagePick = Math.floor(Math.random() * 6) + 1;
  if(imagePick == 4){
    let image = '../../Media/garden' + imagePick + '.jpg';
    let package1 = "url(" + image + ")";
    document.getElementsByClassName("outermost")[0].style.backgroundImage = package1;
    alert(package1);
    return;
  }
  let image = '../../Media/garden' + imagePick + '.jpeg';
  let package1 = "url(" + image + ")";
  document.getElementsByClassName("outermost")[0].style.backgroundImage = package1;
  alert(package1);
}

export default function Landing() {

  

  return(
      <div class="main">
        <div class="switcher">
          <button onClick={changeBackground}>
            <FontAwesomeIcon id="hi" size="3x" icon={faMagic} />
          </button>
        </div>
        <div class="mainT"> R'Garden? </div>
        <div class="subT">Yes. <b>YOURS</b> too! </div>

        <Grid container spacing={3}>
          <Grid item xs={4}>
            <div class="card">
              <div class="card_title">Our Plants & Crops</div>
              <img src={plant_icon} />
              <div class="card_desc">R'Garden grows a variety of different plants! </div>
            </div>
          </Grid>
          <Grid item xs={4}>
          <div class="card">
            <div class="card_title">R'Team</div>
            <img src={team_icon} />
          </div>
          </Grid>
          <Grid item xs={4}>
          <div class="card">
            <div class="card_title">Activities</div>
            <img src={activities_icon} />
          </div>
          </Grid>
        </Grid>

      </div>
  );
}
