import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz6xDtxUUMONcc76oLvQg82rJ1VV8S_uU",
  authDomain: "react-firebase-auth-2cbfb.firebaseapp.com",
  projectId: "react-firebase-auth-2cbfb",
  storageBucket: "react-firebase-auth-2cbfb.firebasestorage.app",
  messagingSenderId: "758379412386",
  appId: "1:758379412386:web:0ecf2d1714d1b5224410fb",
   measurementId: "G-FW1JZHECG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);