// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqEqmPjKIR5n6C8vDgKydIBJ9rJhluF1E",
  authDomain: "focus-app-72cc5.firebaseapp.com",
  projectId: "focus-app-72cc5",
  storageBucket: "focus-app-72cc5.firebasestorage.app",
  messagingSenderId: "397216469638",
  appId: "1:397216469638:web:9da043416925ef02af7707"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;