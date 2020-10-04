import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyAWFS5pX8FKAB73FR2J_P1LPpBzPC1DIII",
  authDomain: "giphy-sentiment.firebaseapp.com",
  databaseURL: "https://giphy-sentiment.firebaseio.com",
  projectId: "giphy-sentiment",
  storageBucket: "giphy-sentiment.appspot.com",
  messagingSenderId: "988227217593",
  appId: "1:988227217593:web:4fe5912e14eee25edbd368"
};

firebase.initializeApp(config)

export default firebase;