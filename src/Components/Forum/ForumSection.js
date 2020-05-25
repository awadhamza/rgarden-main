import React, { Component } from 'react';
import './ForumPage.css';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
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
import TextField from '@material-ui/core/TextField';

import { AwesomeButton, AwesomeButtonProgress } from "react-awesome-button";
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';
import "react-awesome-button/dist/styles.css";

import * as firebase from 'firebase';

var content;
var self;

export default function Forumsection(props) {

  var postsName = "posts"+props.subject;

  function alertPosts() {
    var sectionPosts = document.getElementsByClassName(postsName);

    if(sectionPosts == null){

      alert(sectionPosts + " is empty");

    } else {
      if(sectionPosts[0].style.display != "block"){
        // Hide everything but posts
        sectionPosts[0].style.display = "block";
        document.getElementById('signout').style.display = "none";
        Array.from(document.getElementsByClassName("outer_section")).forEach(
            function(element, index, array) {
                element.style.display = "none";
            }
        );
        if(document.getElementsByClassName('return_button')[0].style.display == "inline-block"){
          // alert('b'+document.getElementsByClassName('return_button')[0].style.display);
          document.getElementsByClassName('forum_button')[0].style.display="inline-block";
        } else {
          // alert('a'+document.getElementsByClassName('return_button')[0].style.display);
          document.getElementsByClassName('mobile_forum')[0].style.display="inline-block";
        }
        document.getElementById('forum_title').style.display = 'none';
        return;
      }
    }
  }

  function relaxSend(){
    alert('hi');
  }

  function changeColors(color){
    document.getElementsByClassName("num_chars")[0].style.color = color;
    document.getElementsByClassName("after_num")[0].style.color = color;
  }

  function handleTextChange() {
    var self = this;
    let charCount = document.getElementById('outlined-multiline-static'+postsName).value.length;

    document.getElementById("num_chars" + props.subject).innerHTML = 300 - charCount;

    if(charCount > 300){

      document.getElementsByClassName("send_button")[0].style.display = 'none';
      document.getElementsByClassName("scroll_button")[0].style.marginRight = '20vw';
      changeColors('red');
    } else if(charCount > 289) {
      changeColors('red');
      document.getElementsByClassName("send_button")[0].style.display = 'block'
      document.getElementsByClassName("scroll_button")[0].style.marginRight = '20px';
    } else if(charCount > 249) {
      changeColors('orange');
      document.getElementsByClassName("send_button")[0].style.display = 'block'
      document.getElementsByClassName("scroll_button")[0].style.marginRight = '20px';
    } else {
      changeColors('black');

      if(window.innerWidth > 500){
        document.getElementsByClassName("send_button")[0].style.display = 'block'
        document.getElementsByClassName("mobile_send")[0].style.display = 'none'
      } else{
        document.getElementsByClassName("mobile_send")[0].style.display = 'inline-block'
        document.getElementsByClassName("send_button")[0].style.display = 'none'
      }

      document.getElementsByClassName("scroll_button")[0].style.marginRight = '20px';
    }
  }

  return(
    <div class="double_outer_section">
      <div class={"outer_section " + "section_"+props.subject} onClick={alertPosts}>
        <div class="section_subject" id={"section_"+props.subject}>{props.subject}</div>
        <div class="section_body">{props.body}</div>
      </div>
      <div class={"posts " + postsName}>
        <ForumPosts subject={props.subject} />
        <div class="input_holder" onChange={(e) => handleTextChange()}>
          <TextField
            id={"outlined-multiline-static"+postsName}
            label=""
            multiline
            rows={4}
            defaultValue=""
            variant="outlined"
            style = {{width: '80%', backgroundColor: '#e8f1ff'}}
          />
        </div>
      </div>
    </div>

  );
}
