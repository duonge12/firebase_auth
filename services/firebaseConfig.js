// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq1wfJ-a-aJkwK2zXLVhu7fe-gMI0MC2w",
  authDomain: "fir-authentication-c5bb4.firebaseapp.com",
  projectId: "fir-authentication-c5bb4",
  storageBucket: "fir-authentication-c5bb4.firebasestorage.app",
  messagingSenderId: "944689182705",
  appId: "1:944689182705:web:a2997975482bc449cbb650"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app)