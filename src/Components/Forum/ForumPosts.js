import React, { Component } from 'react';
import './ForumPage.css';
import Button from '@material-ui/core/Button';

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import * as firebase from 'firebase';

var content;
var self;

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
}

class ForumPosts extends Component {
  constructor(props){
    super(props);
    self = this;
  }

  // Render posts here
  render() {
    return(
      <div class="outer_posts">
        <div class="posts_title">
        {this.props.subject}
        </div>
        <div>
        Hello, section: {this.props.subject}, all the way from your POSTS component!!!
        </div>
        <br />
      </div>
    );
  }
}

export default ForumPosts;
