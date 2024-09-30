// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWX-nNryBsLsd-CMQNxts5YA9Erh95wcs",
  authDomain: "bake-o-stories.firebaseapp.com",
  projectId: "bake-o-stories",
  storageBucket: "bake-o-stories.appspot.com",
  messagingSenderId: "650021568280",
  appId: "1:650021568280:web:b584c45e79ebd586e5e86d",
  measurementId: "G-ZQT0JWQ0W3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };