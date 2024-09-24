// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO1-T4rwOxw5UsKpDD9GbHsrhVc73gaAY",
  authDomain: "react-hackathon-498.firebaseapp.com",
  projectId: "react-hackathon-498",
  storageBucket: "react-hackathon-498.appspot.com",
  messagingSenderId: "616151752851",
  appId: "1:616151752851:web:913fd9006cbfc9ad632d66",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app);
const auth = getAuth(app);
export { dataBase, auth };
