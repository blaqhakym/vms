// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUeKBVPOZpvTJRza6Pz2UF4XbCnrP6H4Y",
  authDomain: "visitorsmanagementsystem-28725.firebaseapp.com",
  projectId: "visitorsmanagementsystem-28725",
  storageBucket: "visitorsmanagementsystem-28725.firebasestorage.app",
  messagingSenderId: "411002230872",
  appId: "1:411002230872:web:17a034db2dd78b6dba122d",
  measurementId: "G-62YP1S75LJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
