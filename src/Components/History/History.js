import React from 'react';
import Tilt from 'react-tilt';
import Grid from '@material-ui/core/Grid';
import './History.css';
import historyImage1 from '../../Media/history1.jpg';
import historyImage2 from '../../Media/history2.jpg';
import historyImage3 from '../../Media/history3.jpg';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';


export default function History() {

  return(
    <div class="mainH">
      <div class="desktop">
        <Grid container spacing={1}>

          <Grid item md={8} sm={12} xs={12} >
            <div class="history_tile top_tile">
              <img src={historyImage3} />
              <span class="history_tile_title">
              A Needed Initiative
              </span>
              <br/>
              <div class="line" />
              <span class="history_tile_desc">
                In 2015, UCR's survey of undergraduate students showed that __% of students faced food insecurity.
              </span>
            </div>
          </Grid>
          <Grid item md={4} sm={12} xs={12} >
            <div class="history_tile_side">
              2015<br/>
              January 1st
            </div>
          </Grid>


          <Grid item md={4} sm={12} xs={12} >
            <div class="history_tile_side left">
              2016<br/>
              January 1st
            </div>
          </Grid>
          <Grid item md={8} sm={12} xs={12} >
            <div class="history_tile left_tile">
              <img src={historyImage1} />
              <span class="history_tile_title">
              How We Began
              </span>
              <br/>
              <div class="line" />
              <span class="history_tile_desc">
                TODO
              </span>
            </div>
          </Grid>

          <Grid item md={8} sm={12} xs={12} >
            <div class="history_tile">
              <img src={historyImage2} />
              <span class="history_tile_title">
              Our Focus
              </span>
              <br/>
              <div class="line" />
              <span class="history_tile_desc">
                The R'Garden is what you make it. We invite the entire community to help us continue grow organic produce, and help us foster a future where no student struggles with food insecurity.
              </span>
            </div>
          </Grid>
          <Grid item md={4} sm={12} xs={12} >
            <div class="history_tile_side">
              -<br/>
              PRESENT
            </div>
          </Grid>

        </Grid>
      </div>
      <div class="mobile">
        <Flippy
          flipOnHover={false} // default false
          flipOnClick={true} // default false
          flipDirection="horizontal" // horizontal or vertical
          style={{ width: '300px', height: '300px', margin: '0 auto' }} /// these are optional style, it is not necessary
        >
          <FrontSide
            style={{
              backgroundColor: '#eee',
            }}
          >

            <img class="mobile_img" src={historyImage3} />
            <div class="mobile_title">A Needed Initiative</div>
            <div class="line" />
            <i><b>Learn more </b></i> <FontAwesomeIcon id="mobile_icon" size="lg" icon={faHandPointer} />

          </FrontSide>

          <BackSide
            style={{ backgroundColor: '#eee'}}>

            In 2015, UCR's survey of undergraduate students showed that __% of students faced food insecurity.


          </BackSide>

        </Flippy>

        <Flippy
          flipOnHover={false} // default false
          flipOnClick={true} // default false
          flipDirection="horizontal" // horizontal or vertical
          style={{ width: '300px', height: '300px', margin: '0 auto' }} /// these are optional style, it is not necessary
        >
          <FrontSide
            style={{
              backgroundColor: '#eee',
            }}
          >

            <img class="mobile_img" src={historyImage1} />
            <div class="mobile_title">How We Began</div>
            <div class="line" />
            <i><b>Learn more </b></i> <FontAwesomeIcon id="mobile_icon" size="lg" icon={faHandPointer} />

          </FrontSide>

          <BackSide
            style={{ backgroundColor: '#eee'}}>

            TODO

          </BackSide>

        </Flippy>

        <Flippy
          flipOnHover={false} // default false
          flipOnClick={true} // default false
          flipDirection="horizontal" // horizontal or vertical
          style={{ width: '300px', height: '300px', margin: '0 auto' }} /// these are optional style, it is not necessary
        >
          <FrontSide
            style={{
              backgroundColor: '#eee',
            }}
          >

            <img class="mobile_img" src={historyImage2} />
            <div class="mobile_title">Our Focus</div>
            <div class="line" />
            <i><b>Learn more </b></i> <FontAwesomeIcon id="mobile_icon" size="lg" icon={faHandPointer} />

          </FrontSide>

          <BackSide
            style={{ backgroundColor: '#eee'}}>

            TODO

          </BackSide>

        </Flippy>
      </div>
    </div>
    );
}
