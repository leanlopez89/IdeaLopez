import { initializeApp } from "firebase/app";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyAzlAJ3ITvugZpga3TCn_O8TPg4zpahpqA",
    authDomain: "ecommerce-482b4.firebaseapp.com",
    projectId: "ecommerce-482b4",
    storageBucket: "ecommerce-482b4.appspot.com",
    messagingSenderId: "576640813321",
    appId: "1:576640813321:web:a294a0b9ffed4439faabd8",
    measurementId: "G-DG8ZGMVHK8"
  };

  




const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export{auth,db,storage,app,analytics}