import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBCx55FyneOtCymrEeWMwcz0F7YqA85XKo",
    authDomain: "artgallery-17767.firebaseapp.com",
    projectId: "artgallery-17767",
    storageBucket: "artgallery-17767.appspot.com",
    messagingSenderId: "839898479598",
    appId: "1:839898479598:web:2fa0e383ef3165113a6cff"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {
    firebase,
  };