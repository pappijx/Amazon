import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD2U4MEqa-U1v1rCqHDvo3j7ZNy1DinjoE",
  authDomain: "clone-c49d5.firebaseapp.com",
  databaseURL: "https://clone-c49d5.firebaseio.com",
  projectId: "clone-c49d5",
  storageBucket: "clone-c49d5.appspot.com",
  messagingSenderId: "418378334904",
  appId: "1:418378334904:web:c26658acbacc981aabea4d",
});

const auth = firebase.auth();

export { auth };
