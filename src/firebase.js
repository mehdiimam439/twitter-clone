// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaa39I2FiQ4Km-NSfPm8E6-ae92z8FPA4",
  authDomain: "twitter-clone-9edde.firebaseapp.com",
  projectId: "twitter-clone-9edde",
  storageBucket: "twitter-clone-9edde.appspot.com",
  messagingSenderId: "1037531805621",
  appId: "1:1037531805621:web:e644eae9f9fb1af9128bfc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
