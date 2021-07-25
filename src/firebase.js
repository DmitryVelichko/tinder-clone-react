import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF4F-MLxCy_JdTY4ltYrrXAwT4f4LGJYk",
  authDomain: "tinder-clone-c5cea.firebaseapp.com",
  projectId: "tinder-clone-c5cea",
  storageBucket: "tinder-clone-c5cea.appspot.com",
  messagingSenderId: "466714597857",
  appId: "1:466714597857:web:3923d445c27026788a5aa0",
  measurementId: "G-LY3ZM68ZBV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;