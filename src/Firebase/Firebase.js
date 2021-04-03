import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdUxDQR1by77_Rv7k7jG4HQD-Gwcf-0oQ",
  authDomain: "auth-implementation-6255a.firebaseapp.com",
  projectId: "auth-implementation-6255a",
  storageBucket: "auth-implementation-6255a.appspot.com",
  messagingSenderId: "1042604804506",
  appId: "1:1042604804506:web:d63a303b6c42f259e61223",
  measurementId: "G-N0M6HWGXK4",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export { auth, googleProvider };
