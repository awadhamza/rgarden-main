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
import img1 from '../../Media/garden1.jpeg';
import img2 from '../../Media/garden2.jpeg';
import img3 from '../../Media/garden3.jpeg';
import img4 from '../../Media/garden4.jpg';
import img5 from '../../Media/farm1.jpeg';
import img6 from '../../Media/garden6.jpeg';
import img7 from '../../Media/farm2.jpeg';
import img8 from '../../Media/farm3.jpeg';


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

class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {
      imgNum: -1,
      background: null,
    }

    this.changeBackground = this.changeBackground.bind(this);
  }

  changeBackground() {
    let imagePick = Math.floor(Math.random() * 8) + 1;

    while(imagePick == this.state.imgNum){
      imagePick = Math.floor(Math.random() * 8) + 1;
    }

    this.state.imgNum = imagePick;

    if(imagePick == 1){
      document.getElementsByClassName("outermost")[0].style.backgroundImage = 'url(' + img1 + ')';
    }
    if(imagePick == 2){
      document.getElementsByClassName("outermost")[0].style.backgroundImage = 'url(' + img2 + ')';
    }
    if(imagePick == 3){
      document.getElementsByClassName("outermost")[0].style.backgroundImage = 'url(' + img3 + ')';
    }
    if(imagePick == 4){
      document.getElementsByClassName("outermost")[0].style.backgroundImage = 'url(' + img4 + ')';
    }
    if(imagePick == 5){
      document.getElementsByClassName("outermost")[0].style.backgroundImage = 'url(' + img5 + ')';
    }
    if(imagePick == 6){
      document.getElementsByClassName("outermost")[0].style.backgroundImage = 'url(' + img6 + ')';
    }
    if(imagePick == 7){
      document.getElementsByClassName("outermost")[0].style.backgroundImage = 'url(' + img7 + ')';
    }
    if(imagePick == 8){
      document.getElementsByClassName("outermost")[0].style.backgroundImage = 'url(' + img8 + ')';
    }

  }

  render(){
    return(
        <div class="main">
          <div class="switcher">
            <button onClick={this.changeBackground}>
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
}

export default Landing;
