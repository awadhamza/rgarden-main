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
import Tilt from 'react-tilt';
import Footer from '../Footer/Footer';


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
      document.getElementsByClassName("outermost")[0].style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.1)),url(' + img1 + ')';
    }
    if(imagePick == 2){
      document.getElementsByClassName("outermost")[0].style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.1)),url(' + img2 + ')';
    }
    if(imagePick == 3){
      document.getElementsByClassName("outermost")[0].style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.1)),url(' + img3 + ')';
    }
    if(imagePick == 4){
      document.getElementsByClassName("outermost")[0].style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.1)),url(' + img4 + ')';
    }
    if(imagePick == 5){
      document.getElementsByClassName("outermost")[0].style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.1)),url(' + img5 + ')';
    }
    if(imagePick == 6){
      document.getElementsByClassName("outermost")[0].style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.1)),url(' + img6 + ')';
    }
    if(imagePick == 7){
      document.getElementsByClassName("outermost")[0].style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.1)),url(' + img7 + ')';
    }
    if(imagePick == 8){
      document.getElementsByClassName("outermost")[0].style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.1)),url(' + img8 + ')';
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
              <img src={plant_icon} />
              <Tilt className="Tilt poobah" options={{ max : 25, perspective: 1000, scale: 1.1 }} style={{ height: 250, width: 250 }} >
               <div class="card">
                 <div class="card_title">Our Plants & Crops</div>
                 Here, at the R'Garden, we grow organic.
               </div>
              </Tilt>
            </Grid>
            <Grid item xs={4}>
              <img src={team_icon} />
              <Tilt className="Tilt poobah" options={{ max : 25, perspective: 1000, scale: 1.1 }} style={{ height: 250, width: 250 }} >
               <div class="card">
                 <div class="card_title">Meet R'Team</div>
                 Blah blah blahblah blahblah blahblah blahblah blahblah blah
               </div>
              </Tilt>
            </Grid>
            <Grid item xs={4}>
              <img src={activities_icon} />
              <Tilt className="Tilt poobah" options={{ max : 25, perspective: 1000, scale: 1.1 }} style={{ height: 250, width: 250 }} >
               <div class="card">
                 <div class="card_title">Events & Activities</div>
                 blah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blah
               </div>
              </Tilt>
            </Grid>
          </Grid>

          <div class="bot_land">
            Where to get started:
          </div>

          <Footer />

        </div>
    );
  }
}

export default Landing;
