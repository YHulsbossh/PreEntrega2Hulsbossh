import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_RovsxG8GzwHsmtLNqk0aqraBI3LEWHI",
  authDomain: "bernadette-ecommerce.firebaseapp.com",
  projectId: "bernadette-ecommerce",
  storageBucket: "bernadette-ecommerce.appspot.com",
  messagingSenderId: "366442985866",
  appId: "1:366442985866:web:edf162328d32ef76467073"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


