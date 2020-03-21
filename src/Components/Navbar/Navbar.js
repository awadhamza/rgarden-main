import React from 'react';
import Landing from '../Landing/Landing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCheckSquare, faCoffee , faCaretSquareDown , faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import Events from '../Events/Events';

export default function Navbar() {

  return (

    <Router>

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

        <span class="halalburger">
          <FontAwesomeIcon icon={faBars} size="3x" />
        </span>

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
