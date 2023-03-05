import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEGAokEYq-dTH6tldHAuOKGUUFECsAHEk",
  authDomain: "reels-d7f60.firebaseapp.com",
  projectId: "reels-d7f60",
  storageBucket: "reels-d7f60.appspot.com",
  messagingSenderId: "670380285845",
  appId: "1:670380285845:web:67e40dfbd619061f10a09c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = firebase.auth();
const firestore = firebase.firestore();
export const database = {
  users: firestore.collection("users"),
  getTimeStamp: firebase.firestore.FieldValue.getTimeStamp,
};

export const storage = firebase.storage();
