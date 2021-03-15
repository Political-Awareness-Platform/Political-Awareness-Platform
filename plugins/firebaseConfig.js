import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/functions';

if (!firebase.apps.length) {
  var firebaseConfig = {
    apiKey: process.env.APIKEY,
    projectId: process.env.PROJECTID,
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
}


const fireDB = firebase.firestore()
const fireAuth = firebase.auth()
const fireFunc = firebase.functions()

if (process.client && window.location.hostname === "localhost") {
  fireDB.useEmulator("localhost", 8080);
  fireAuth.useEmulator("http://localhost:9099");
  fireFunc.useEmulator("localhost", 5001);
}


export { fireDB, fireAuth, fireFunc }
