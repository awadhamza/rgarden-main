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
import ForumPosts from './ForumPosts.js';

import * as firebase from 'firebase';

var content;
var self;

export default function Forumsection(props) {

  var postsName = "posts"+props.subject;

  function alertPosts() {
    var sectionPosts = document.getElementsByClassName(postsName);
    var postsSection = document.getElementsByClassName("section_"+props.subject);

    if(sectionPosts == null){
      alert(sectionPosts + " is empty");
    } else {
      if(sectionPosts[0].style.display != "block"){
        // Hide everything but posts
        sectionPosts[0].style.display = "block";

        Array.from(document.getElementsByClassName("outer_section")).forEach(
            function(element, index, array) {
                element.style.display = "none";
            }
        );

        document.getElementsByClassName('forum_button')[0].style.display="block";

        return;
      }
      // Show everything but posts
      sectionPosts[0].style.display = "none";


      // if(collection[0].style.display == "hidden")
      // collection[0].style.display = "block";
    }
  }

  return(
    <div class="double_outer_section">
      <div class={"outer_section " + "section_"+props.subject} onClick={alertPosts}>
        <div class="section_subject" id={"section_"+props.subject}>{props.subject}</div>
        <div class="section_body">{props.body}</div>
      </div>
      <div class={"posts " + postsName}>
        <ForumPosts subject={props.subject} pName={postsName} />
      </div>
    </div>

  );
}
