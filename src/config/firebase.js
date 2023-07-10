import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMQqECgMXPbwJdpn2xTXhKUmJyX9UBZQY",
  authDomain: "twitter-1d047.firebaseapp.com",
  projectId: "twitter-1d047",
  storageBucket: "twitter-1d047.appspot.com",
  messagingSenderId: "510726300818",
  appId: "1:510726300818:web:1c1ea2754b37dea386b24b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default db;
