import React, { Component } from 'react'
import EventCard from '../Events/EventCard';
import './CheckIn.css'

// Latitude = horiz bars
// Longitude = vertical bars

var botLat = 33.97084;
var topLat = 33.97166;

var rightLon = -117.33439;
var leftLon = -117.33572;

var mockLeft = -118.026178;
var mockTop = 33.831398;
var mockBot = 33.831261;
var mockRight = -118.026065;

//    33.831261 >   33.8312513 <   33.831398
//  -118.026178 < -118.0261281 < -118.026065

function handlePermissions() {
  navigator.permissions.query({name:'geolocation'}).then(function(result) {
    if (result.state == 'granted') {
      alert('granted');
    } else if (result.state == 'prompt') {
      navigator.geolocation.getCurrentPosition();
      alert('pending');
    } else if (result.state == 'denied') {
      alert('denied');
    }
  });
}

export default class Checkin extends Component {
  constructor(props){
    super(props);

    this.getLocation = this.getLocation.bind(this);
    this.showPosition = this.showPosition.bind(this);
    this.verifyPosition = this.verifyPosition.bind(this);
    this.verifyMock = this.verifyMock.bind(this);
    this.failedPermissions = this.failedPermissions.bind(this);

  }

  verifyPosition(position) {

    let longitude = position.coords.longitude;
    let latitude = position.coords.latitude;

    if((leftLon < longitude && longitude < rightLon) && (botLat > latitude && latitude < topLat)){
      document.getElementsByClassName('Clocation')[0].innerHTML = "Location requirement:<div id='loc_color'><i>&nbsp;Complete</i></div>";
      document.getElementById("loc_color").style.color = "green";
      // alert('SUCCESS: TELL HAMZA UR AT THE GARDEN');
    } else {

      document.getElementsByClassName('Clocation')[0].innerHTML = "Location requirement:<div id='loc_color'><i>&nbsp;Incomplete</i></div>";
      document.getElementById("loc_color").style.color = "red";
      // alert('It says you are not at the garden. I hope that is the case.')
    }

  }

  verifyMock(position) {
    let longitude = position.coords.longitude;
    let latitude = position.coords.latitude;

    if((mockLeft < longitude && longitude < mockRight) && (mockBot > latitude && latitude < mockTop)){
      document.getElementsByClassName('Clocation')[0].innerHTML = "Location requirement:<div id='loc_color'><i>&nbsp;Complete</i></div>";
      document.getElementById("loc_color").style.color = "green";
      // alert('You are INFRONT OF THE HOUSE!');
    } else {

      document.getElementsByClassName('Clocation')[0].innerHTML = "Location requirement:<div id='loc_color'><i>&nbsp;Incomplete</i></div>";
      document.getElementById("loc_color").style.color = "red";
      // alert('It says you are not at the garden. I hope not. \n Latitude:  '+ position.coords.latitude +' Longitude:  '+ position.coords.longitude);
    }

  }

  failedPermissions() {
    alert('Permission denied?');
  }

  showPosition(position) {
    this.verifyPosition(position);
    //this.verifyMock(position);

    document.getElementById("Response").innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
  }

  getLocation() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition, this.failedPermissions);
    } else {
      document.getElementById("Response").innerHTML = "Geolocation is not supported by this browser.";
    }
    
  }
// <iframe class="to_mid" src="https://docs.google.com/forms/d/e/1FAIpQLScvjeO_AuYTGzqcv_6G0at7u4vEizf-DAEi1nG-eh2dtx-IKw/viewform?embedded=true" width="640" height="546" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
  render() {
    return(
      <div class="top_checkin">
        <div class="inline_top"/>
        <div class="title_top">
          CHECK IN!
        </div>
        <div class="inline_bot"/>
        <br/>
        <div class="subtitle_top">
          There are a few requirements for checking in:
          <br/><p><b>1.</b> You must be at/around the R'Garden</p>
          <p><b>2.</b> You must submit the form below</p>
        </div>

        <div class="Checkin_Req">
          <b>Check In Requirements:</b><br/><br/>
          <div class="Clocation">Location requirement:
            <div id="loc_color">
              <i>&nbsp;Missing</i>
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div class="Cform"> Form requirement:
            <div id="form_color">
              <i>&nbsp;Missing</i>
            </div>
          </div>
        </div>

        <div id="Response">Launch Geolocation:</div>
        <button id="loc_button" onClick={this.getLocation}>Locate Me</button>
        <br/>

        </div>
    );
  }
}
