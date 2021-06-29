import firebase from 'firebase/app'
import 'firebase/database';
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyDwc5lH9Q31YRw1fMtsevDahrjRlpjiUY8",
    authDomain: "partnerupchallenge.firebaseapp.com",
    projectId: "partnerupchallenge",
    storageBucket: "partnerupchallenge.appspot.com",
    messagingSenderId: "186560554103",
    appId: "1:186560554103:web:4d2d4120b5ea3ca654d272"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);