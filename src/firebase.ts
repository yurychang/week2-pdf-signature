// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "week2-pdf-signature.firebaseapp.com",
  projectId: "week2-pdf-signature",
  storageBucket: "week2-pdf-signature.appspot.com",
  messagingSenderId: "340725256617",
  appId: "1:340725256617:web:b4c18ded7911e76574b4b8",
  measurementId: "G-1K9C6XSDZL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);
export default app;
