import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/firebase-functions'

if (!firebase.apps.length) {
  const config = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket:process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
  }
  firebase.initializeApp(config)
}
const fireDb = firebase.firestore()
const fireAuth = firebase.auth()
const fireFunc = firebase.functions()
export { fireDb, fireAuth, fireFunc }
