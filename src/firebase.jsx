// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6RUaqEKLYrUctagFoWeH7NSOORBYdXLA",
  authDomain: "react-portfolio-deepanshu.firebaseapp.com",
  projectId: "react-portfolio-deepanshu",
  storageBucket: "react-portfolio-deepanshu.appspot.com",
  messagingSenderId: "110872246689",
  appId: "1:110872246689:web:c50c6cbb374ae2561d73e0",
  measurementId: "G-SNBRW24DSR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();