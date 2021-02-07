import * as firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';
import 'firebase/functions'

if (!firebase.apps.length) {
  var firebaseConfig = {
    apiKey: process.env.APIKEY,
    projectId: process.env.PROJECTID,
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
}

const fireDb = firebase.firestore()
const fireAuth = firebase.auth()
const fireFunc = firebase.functions()

export { fireDb, fireAuth, fireFunc }
