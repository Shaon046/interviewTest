import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB7QOTV5KqfezZu-kQMXBUaQt6GeCLI4vA",
  authDomain: "interview-18fb8.firebaseapp.com",
  projectId: "interview-18fb8",
  storageBucket: "interview-18fb8.appspot.com",
  messagingSenderId: "981472956282",
  appId: "1:981472956282:web:8c4f766654294d0731d0c3",
  measurementId: "G-CP5CRE7RKR",
  databaseURL:
    "https://interview-18fb8-default-rtdb.asia-southeast1.firebasedatabase.app",
};

export const firebaseApp = initializeApp(firebaseConfig);

export const database = getDatabase(firebaseApp);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
