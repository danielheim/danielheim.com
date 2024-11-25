// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const json = process.env.NEXT_PUBLIC_FIREBASE_CONFIG;
const firebaseConfig = json ? JSON.parse(json) : {};

if (process.env.NODE_ENV !== "production") {
  // This is expected locally.
  if (!json) console.warn("No firebase configuration found in environment.");
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
