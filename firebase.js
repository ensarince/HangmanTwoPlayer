// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVy4-OQtJfoRmg4iqK7Fb4-Z4J-sZuByQ",
  authDomain: "hangman-a35fc.firebaseapp.com",
  projectId: "hangman-a35fc",
  storageBucket: "hangman-a35fc.appspot.com",
  messagingSenderId: "756680927468",
  appId: "1:756680927468:web:3aa5ddfde2405477fd1dc9",
  measurementId: "G-0GHKFWBLK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);