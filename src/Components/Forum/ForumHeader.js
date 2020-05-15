import React, { Component } from 'react';
import './ForumPage.css';
import Button from '@material-ui/core/Button';
import ForumSection from './ForumSection.js';
import Footer from '../Footer/Footer';

import * as firebase from 'firebase';

var content;
var self;

class ForumHeader extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return(
      <div>
        <ForumSection
        subject="announcements"
        body="The place where you can find important updates and messages relating to the R'Garden"
        />
        <ForumSection
        subject="general"
        body="Here, you can post about anything relating to the R'Garden or gardening"
        />
        <ForumSection
        subject="help"
        body="If you have a question about gardening practices or the R'Garden, ask it here!"
        />
      </div>
    );
  }
}

export default ForumHeader;
