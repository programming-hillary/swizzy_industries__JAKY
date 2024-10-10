// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBawzfya4SoxFmhUJZfEUM040AtfByqtYU",
  authDomain: "jaky-stores.firebaseapp.com",
  projectId: "jaky-stores",
  storageBucket: "jaky-stores.appspot.com",
  messagingSenderId: "16590729704",
  appId: "1:16590729704:web:4013d916f131001bb3b45d",
  measurementId: "G-9JRKZTZG3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
