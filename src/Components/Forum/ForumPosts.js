import React, { Component, useEffect, useRef } from 'react';
import './ForumPage.css';
import Button from '@material-ui/core/Button';

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareDown, faEnvelope, faImage, faMarker, faPaperclip, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

import Post from './Post.js';

import * as firebase from 'firebase';

var content;
var intervalID = -1;

function returnForum() {
  Array.from(document.getElementsByClassName("outer_section")).forEach(
      function(element, index, array) {
          element.style.display = "block";
      }
  );
  document.getElementById('forum_title').style.display = 'block';
}

function hidePosts() {
  Array.from(document.getElementsByClassName("posts")).forEach(
      function(element, index, array) {
          element.style.display = "none";
      }
  );
  document.getElementById('forum_title').style.display = 'block';
}

function isHidden(el) {
  if(el != null)
    return (el.offsetParent === null)
}

class ForumPosts extends Component {
  constructor(props){
    super(props);

    this.state = {
      posts: [],
      updatedButtons: false,
    }

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {

    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);

    var self = this

    let targetRef = firebase.database().ref('sections/' + this.props.subject + '/posts/');

    targetRef.on('value', function(snapshot) {
      let dbPosts = snapshot.val();

      var tempArr = [];

      for(let post in dbPosts){
        tempArr.push({
          content: dbPosts[post].content,
          author: dbPosts[post].author,
          ts: dbPosts[post].ts,
        });
      }

      self.setState({
        posts: tempArr,
      })

    });

    this.scrollToBottom();
  }

  componentDidUpdate() {

    this.scrollToBottom();
  }

  componentWillUnmount() {
    clearInterval(intervalID);
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  scrollToBottom = () => {
    if(this.messagesEnd != null)
      this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  updateWindowDimensions() {

    if(window.innerWidth < 500 && this.state.updatedButtons === false){
      this.setState({
        updatedButtons: true,
      });
      document.getElementsByClassName('return_button')[0].style.display = 'none';
      if(document.getElementsByClassName('forum_button')[0].style.display == 'inline-block'){
        document.getElementsByClassName('mobile_forum')[0].style.display = 'inline-block';
      }

      document.getElementsByClassName('send_button')[0].style.display = 'none';
      document.getElementsByClassName('mobile_send')[0].style.display = 'inline-block';
    }

    if(window.innerWidth > 500 && this.state.updatedButtons === false){
      this.setState({
        updatedButtons: true,
      });
      document.getElementsByClassName('return_button')[0].style.display = 'inline-block';
      if(document.getElementsByClassName('mobile_forum')[0].style.display == 'inline-block'){
          document.getElementsByClassName('mobile_forum')[0].style.display = 'none';
          document.getElementsByClassName('forum_button')[0].style.display = 'inline-block';
      }

      document.getElementsByClassName('send_button')[0].style.display = 'block';
      document.getElementsByClassName('mobile_send')[0].style.display = 'none';
    }

    this.setState({
      updatedButtons: false,
    });

  }

  sendMessage(){
    var self = this;

    var postsName = 'posts'+self.props.subject;

    var user = firebase.auth().currentUser;

    var usersRef = firebase.database().ref('users/' + user.uid + '/').once('value').then(function(snapshot) {

      var firstName = snapshot.val().fname;
      let msg = document.getElementById('outlined-multiline-static'+postsName).value;

      if(msg.length <= 0){
        alert('Can\'t send empty messages!');
        return;
      }


      var currentdate = new Date();
      var hours = currentdate.getHours();
      var minutes = currentdate.getMinutes();

      if(minutes < 10){
        minutes = "0" + minutes;
      }

      if (hours > 12) {
          hours -= 12;
          minutes = minutes + " PM";
      } else if (hours < 12){
          minutes = minutes + " AM";
      } else if (hours === 0) {
          hours = 12;
          minutes = minutes + " AM";
      }

      var time = hours + ":" + minutes + " @ "
           + (currentdate.getMonth()+1)  + "/"
           + currentdate.getDate() + "/"
           + currentdate.getFullYear();

      var postsRef = firebase.database().ref('sections/' + self.props.subject + '/posts/' + Date.now()).set({
        author: firstName,
        content: msg,
        ts: time.toString(),
        uid: user.uid,
      });

      document.getElementById('outlined-multiline-static'+postsName).value = "";
      document.getElementsByClassName('num_chars')[0].innerHTML = 300;
    });

    this.scrollToBottom();
  }


  // Render posts here
  render() {

    return(
      <div class={"outer_posts " +"outer_posts"+this.props.subject}>
        <div class="posts_title">
        {this.props.subject}
        </div>
        <div class="line"/>
        <div class={"post_mapper " + "pm"+this.props.subject} id="scrollDown">

          {this.state.posts.map((post, idx) => (
              <Post content={post.content}
                    author={post.author}
                    ts={post.ts}
                    ref={(ref) => this['_div' + idx] = ref}
              />
          ))}
          <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
         </div>
        </div>
        <div class="bot_butt">
          <div class="send_button">
            <AwesomeButton
              id="sendButton"
              size="medium"
              ripple
              onPress={() => {
                this.sendMessage();
              }}

              style= {{
            }}
            >
              Send
            </AwesomeButton>
          </div>

          <div class="scroll_button">
            <AwesomeButton
              size="small"
              ripple
              onPress={() => {
                this.scrollToBottom();
              }}

              style= {{
            }}
            >
              <b>V</b>
            </AwesomeButton>
          </div>

          <button class="mobile_bot mobile_scroll" onClick={this.scrollToBottom}>
            <FontAwesomeIcon id="" size="md" icon={faAngleDoubleDown} />
          </button>
          <button class="mobile_bot mobile_send" onClick={this.sendMessage.bind(this)}>
            <FontAwesomeIcon id="" size="sm" icon={faEnvelope} /> SEND
          </button>

          <div class="if_mobile2"><br/><br/><br/></div>
          <div>
            <div class="after_num">characters left</div><div class="num_chars" id={"num_chars" + this.props.subject}>300</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForumPosts;
