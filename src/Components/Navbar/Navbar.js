import React, { Component } from 'react';
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
import CheckIn from '../CheckIn/CheckIn';
import Footer from '../Footer/Footer';
import History from '../History/History';
import Mission from '../Mission/Mission';
import ForumPage from '../Forum/ForumPage';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
  }

  handleBurger() {
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

  handleMobileAbout() {

    document.getElementsByClassName("secret_formula")[0].style.display="block";

  }

  handleChoice() {
    document.getElementsByClassName("secret_formula")[0].style.display = "none";

  }

  handleScreenWidthChange() {

    var div = document.getElementsByClassName("secret_formula")[0];

    if(window.screen.width > 1050){
      div.style.display ="block";
    } else {
      div.style.display = "none";
    }
  }

  render() {

    return (
      <Router>
        <div class="nav_bar">

          <div class="home_button" onClick={this.handleChoice}>
            <Link class="hvr-float-shadow" to="/">R'Garden</Link>
          </div>

          <div class="drop_parent">

            <span class="about-nav hvr-underline-from-left">
              <FontAwesomeIcon icon={faCaretSquareDown} /> ABOUT
            </span>

            <div class="dropdown_group" onClick={this.handleChoice}>
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

          <span class="halalburger" onClick={this.handleBurger}>
            <FontAwesomeIcon id="ham-icon" icon={faBars} size="3x" />
          </span>

          <div class="secret_formula">

            <div class="mobile_parent">

              <span class="about-nav hvr-underline-from-left no_highlights" onClick={this.handleMobileAbout}>
                <FontAwesomeIcon icon={faCaretSquareRight} /> ABOUT
              </span>

              <div class="dropdown_group" onClick={this.handleChoice}>
                <Link class="hvr-grow-rotate no_highlights" to="/history">History</Link>
                <br/>
                <Link class="hvr-grow-rotate no_highlights" to="/mission">Mission</Link>
                <br/>
                <Link class="hvr-grow-rotate no_highlights" to="/hoursandlocation">Time & Place</Link>
                <br/>
                <Link class="hvr-grow-rotate no_highlights" to="/media">Media</Link>
                <br/>
              </div>

            </div>
            <div onClick={this.handleChoice}>
              <Link class="ham-item hvr-underline-from-left" to="/events">
                EVENTS
              </Link>
              <br/><br/>
              <Link class="ham-item hvr-underline-from-left" to="/checkin">
                CHECK IN
              </Link>
              <br/><br/>
              <Link class="ham-item hvr-underline-from-left" to="/forum">
                FORUM
              </Link>
            </div>
          </div>

          <Link class="nav-item hvr-underline-from-left" to="/events">
            EVENTS
          </Link>

          <Link class="nav-item hvr-underline-from-left" to="/checkin">
            CHECK IN
          </Link>

          <Link class="nav-item hvr-underline-from-left" to="/forum">
            FORUM
          </Link>

        </div>

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/checkin" component={CheckIn} />
        <Route exact path="/history" component={History} />
        <Route exact path="/mission" component={Mission} />
        <Route exact path="/forum" component={ForumPage} />
      </Switch>

      <Footer />

    </Router>


    );
  }
}

export default Navbar;
