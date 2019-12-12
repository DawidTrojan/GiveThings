import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

let firebaseConfig = {
  apiKey: "AIzaSyA2uEHsJLVW_VREHame_keyQu0xiuaiMa8",
  authDomain: "give-things.firebaseapp.com",
  databaseURL: "https://give-things.firebaseio.com",
  projectId: "give-things",
  storageBucket: "give-things.appspot.com",
  messagingSenderId: "749997316367",
  appId: "1:749997316367:web:50b66ecbc90cd73d5d067a"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
