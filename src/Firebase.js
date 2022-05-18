import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBFnCAk8Kd3uYu-bKUAopGxaLZLWKVMUu0",
    authDomain: "reactecommerce-7710e.firebaseapp.com",
    projectId: "reactecommerce-7710e",
    storageBucket: "reactecommerce-7710e.appspot.com",
    messagingSenderId: "102683451252",
    appId: "1:102683451252:web:bf75b3e921d32820ee5621",
    measurementId: "G-CZR9DH09L6"
  };

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
