
  var firebaseConfig = {
    apiKey: "AIzaSyCo6f1PFXHiv5a-ZfybLcp8-Jl9GgoR_xY",
    authDomain: "rgarden-b5653.firebaseapp.com",
    databaseURL: "https://rgarden-b5653.firebaseio.com",
    projectId: "rgarden-b5653",
    storageBucket: "rgarden-b5653.appspot.com",
    messagingSenderId: "65013863213",
    appId: "1:65013863213:web:8c3855dc5a09b3e707f9a4",
    measurementId: "G-X5D3LVGWZ2"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export auth = firebase.auth();
export default firebase;
