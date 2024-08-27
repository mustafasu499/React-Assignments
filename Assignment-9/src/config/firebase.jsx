// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtoE1_ZvNpMb-oi0lr_DNmZnWgCDSZ_s8",
  authDomain: "todoapp-498.firebaseapp.com",
  databaseURL: "https://todoapp-498-default-rtdb.firebaseio.com",
  projectId: "todoapp-498",
  storageBucket: "todoapp-498.appspot.com",
  messagingSenderId: "110137693624",
  appId: "1:110137693624:web:460604d53b6476c911eb4d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app);

export { dataBase };
