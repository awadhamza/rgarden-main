import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'pace-js';
import 'pace-js/themes/orange/pace-theme-minimal.css';
/*
pace-theme-minimal.css
pace-theme-corner-indicator.css
pace-theme-flash.css
pace-theme-flat-top.css
*/

import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCo6f1PFXHiv5a-ZfybLcp8-Jl9GgoR_xY",
  authDomain: "rgarden-b5653.firebaseapp.com",
  databaseURL: "https://rgarden-b5653.firebaseio.com",
  projectId: "rgarden-b5653",
  storageBucket: "rgarden-b5653.appspot.com",
  messagingSenderId: "65013863213",
  appId: "1:65013863213:web:8c3855dc5a09b3e707f9a4",
  measurementId: "G-X5D3LVGWZ2",
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
