// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6U80I-qV_0oX3RRk92UTsHk_vZJ6mS5Y",
  authDomain: "auth-1-bfbc9.firebaseapp.com",
  projectId: "auth-1-bfbc9",
  storageBucket: "auth-1-bfbc9.appspot.com",
  messagingSenderId: "249748881322",
  appId: "1:249748881322:web:26693cfb6a07faef3bb5d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)