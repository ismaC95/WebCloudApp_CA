import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyXb037zAt2a2YMUiyj38g0NZdqthETF0",
  authDomain: "coursesmarketplace.firebaseapp.com",
  projectId: "coursesmarketplace",
  storageBucket: "coursesmarketplace.firebasestorage.app",
  messagingSenderId: "955319533092",
  appId: "1:955319533092:web:e21fb22250917bf21c62b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
