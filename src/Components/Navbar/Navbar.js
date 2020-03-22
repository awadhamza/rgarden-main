import React from 'react';
import Landing from '../Landing/Landing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretSquareRight, faCheckSquare, faCoffee , faCaretSquareDown , faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import Events from '../Events/Events';

export default function Navbar() {

  function handleBurger() {
    //alert('CLICKED!');
    var div = document.getElementsByClassName("secret_formula")[0];

    if(div.style.display === "block"){
      // hide
      div.style.display = "none";
    } else {
      // show
      div.style.display ="block";
    }

  }

  function handleChoice() {
    document.getElementsByClassName("secret_formula")[0].style.display = "none";
  }

  function handleScreenWidthChange() {

    var div = document.getElementsByClassName("secret_formula")[0];

    if(window.screen.width > 1050){
      div.style.display ="block";
    } else {
      div.style.display = "none";
    }
  }

  return (

    <Router>
      {handleScreenWidthChange}
      <div class="nav_bar">

        <div class="home_button">
          <Link class="hvr-float-shadow" to="/">R'Garden</Link>
        </div>

        <div class="drop_parent">

          <span class="about-nav hvr-underline-from-left">
            <FontAwesomeIcon icon={faCaretSquareDown} /> ABOUT
          </span>

          <div class="dropdown_group">
            <Link class="hvr-grow-rotate" to="/history">History</Link>
            <br/>
            <Link class="hvr-grow-rotate" to="/mission">Mission</Link>
            <br/>
            <Link class="hvr-grow-rotate" to="/hoursandlocation">Time & Place</Link>
            <br/>
            <Link class="hvr-grow-rotate" to="/media">Media</Link>
            <br/>
          </div>

        </div>

        <span class="halalburger" onClick={handleBurger}>
          <FontAwesomeIcon id="ham-icon" icon={faBars} size="3x" />
        </span>

        <div class="secret_formula" onClick={handleChoice}>

        <div class="mobile_parent">

          <span class="about-nav hvr-underline-from-left">
            <FontAwesomeIcon icon={faCaretSquareRight} /> ABOUT
          </span>

          <div class="dropdown_group">
            <Link class="hvr-grow-rotate" to="/history">History</Link>
            <br/>
            <Link class="hvr-grow-rotate" to="/mission">Mission</Link>
            <br/>
            <Link class="hvr-grow-rotate" to="/hoursandlocation">Time & Place</Link>
            <br/>
            <Link class="hvr-grow-rotate" to="/media">Media</Link>
            <br/>
          </div>

        </div>

          <Link class="ham-item hvr-underline-from-left" to="/events">
            EVENTS
          </Link>
          <br/><br/>
          <Link class="ham-item hvr-underline-from-left" to="/checkin">
            CHECK IN
          </Link>
          <br/><br/>
          <Link class="ham-item hvr-underline-from-left" to="/yourplot">
            YOUR PLOT
          </Link>
        </div>

        <Link class="nav-item hvr-underline-from-left" to="/events">
          EVENTS
        </Link>

        <Link class="nav-item hvr-underline-from-left" to="/checkin">
          CHECK IN
        </Link>

        <Link class="nav-item hvr-underline-from-left" to="/yourplot">
          YOUR PLOT
        </Link>

      </div>

    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/events" component={Events} />
    </Switch>

  </Router>

  );
}
