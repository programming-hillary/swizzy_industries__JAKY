// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC26hinZ31n4S3-X4Xa9DaHi4frZYkprcg",
  authDomain: "jaky-store.firebaseapp.com",
  projectId: "jaky-store",
  storageBucket: "jaky-store.appspot.com",
  messagingSenderId: "220458656922",
  appId: "1:220458656922:web:17c6f488afb9ab4c93ab23",
  measurementId: "G-N7NRJLBZMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
