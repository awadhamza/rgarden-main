import React, { Component } from 'react';
import './ForumPage.css';
import Login from '../Login/Login';
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Arrow from '../../Media/arrow.png';
import Return from '../../Media/return.png';

import * as firebase from 'firebase';

var content;
var self;

class ForumPage extends Component {
  constructor(props) {
    super(props);
    self = this;
    self.state = {
      user: null,
    }
  }

  componentDidMount() {
    if(document.getElementsByClassName('nav_bar')[0])
      document.getElementsByClassName('nav_bar')[0].style.display='none';

    firebase.auth().onAuthStateChanged(function(user) {
      if(user){
        self.setState({
          user: user,
        })
      } else {

      }
    });
  }

  componentDidUpdate() {

  }

  handleSignOut() {
        firebase.auth().signOut().then(function() {
          // Sign-out successful.
            self.setState({
              user: null,
            });
        }).catch(function(error) {
          // An error happened.
            alert(error);
        });
  }

  undoNav() {
    document.getElementsByClassName('nav_bar')[0].style.display='block';
  }

  testDB() {
    // <Button id='signout' onClick={self.testDB}>
    //   TEST DB
    // </Button>

    var memRef = firebase.database().ref('users/' + firebase.auth().currentUser.uid);
    memRef.set({
      firstVar: "LOLOLO",
    });
  }

  render() {

    if(!self.state.user){
      content = (
        <Login />
      );
    } else {
      content = (
        <div class="outer_signed_forum">
          <h1>R'Garden Forum</h1>

          <Button id='signout' onClick={self.handleSignOut}>
            Sign Out
          </Button>
        </div>
      );
    }

    if(document.getElementsByClassName('nav_bar')[0])
      document.getElementsByClassName('nav_bar')[0].style.display='none';

    return(
      <div class="outerForum">
        <Link class="hvr-grow-rotate returnHomeButton" to="/" onClick={self.undoNav}>Return Home</Link>
        <div class="line" />
        {content}
      </div>
    );
  }
}

export default ForumPage;
