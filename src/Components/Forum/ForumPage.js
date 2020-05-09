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
import ForumSection from './ForumSection.js';
import ForumHeader from './ForumHeader.js';
import ForumPosts from './ForumPosts.js';

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import * as firebase from 'firebase';

var content;
var self;

function undoNav() {
  document.getElementsByClassName('nav_bar')[0].style.display='block';
}

function returnForum() {
  Array.from(document.getElementsByClassName("outer_section")).forEach(
      function(element, index, array) {
          element.style.display = "block";
      }
  );
}

function hidePosts() {
  Array.from(document.getElementsByClassName("posts")).forEach(
      function(element, index, array) {
          element.style.display = "none";
      }
  );
  document.getElementsByClassName('forum_button')[0].style.display="none";
}

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
          <ForumHeader />

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

          <AwesomeButton
            class="aws-btn left_home"
            size="large"
            ripple
            onPress={() => {
              this.props.history.push('/');
              undoNav();
            }}
          >
            Home Page
          </AwesomeButton>
          <span class="forum_button">
            <AwesomeButton
              class="aws-btn"
              size="large"
              ripple
              onPress={() => {
                returnForum();
                hidePosts();
              }}
            >
              Return to Forum
            </AwesomeButton>
          </span>
        <br/>
        {content}
      </div>
    );
  }
}

export default ForumPage;
