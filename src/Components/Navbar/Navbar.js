import React from 'react';
import Landing from '../Landing/Landing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee , faCaretSquareDown , faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

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

        <a class="nav-item hvr-underline-from-left" href="#">
          EVENTS
        </a>
        <a class="nav-item hvr-underline-from-left" href="#">CHECK IN</a>
        <a class="nav-item hvr-underline-from-left" href="#">YOUR PLOT</a>
      </div>

    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/">
        <Landing />
      </Route>
    </Switch>
  </Router>

  );
}


function Home() {
  return <Landing />;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
