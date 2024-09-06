// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXbv8M0I0ZcUPX6Ye_YCz1072XXZXw0OA",
  authDomain: "auth-and-database-498.firebaseapp.com",
  projectId: "auth-and-database-498",
  storageBucket: "auth-and-database-498.appspot.com",
  messagingSenderId: "245958297087",
  appId: "1:245958297087:web:2a3bb49154a2440f6093ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DataBase = getFirestore(app);
const auth = getAuth(app);

export { DataBase, auth };
