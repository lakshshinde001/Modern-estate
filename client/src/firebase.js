// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "modern-estate-af463.firebaseapp.com",
  projectId: "modern-estate-af463",
  storageBucket: "modern-estate-af463.appspot.com",
  messagingSenderId: "514852051637",
  appId: "1:514852051637:web:b69a7b5bd29b883d587cfc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);