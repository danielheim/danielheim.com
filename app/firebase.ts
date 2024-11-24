// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRyqyulxcCmukVGDO7PsYbBTrAcSCNqhQ",
  authDomain: "personal-website-caddc.firebaseapp.com",
  projectId: "personal-website-caddc",
  storageBucket: "personal-website-caddc.firebasestorage.app",
  messagingSenderId: "645407056374",
  appId: "1:645407056374:web:8145a4a78b09604e2c67d7",
  measurementId: "G-6GB3JLQ5CC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics: Analytics | undefined;
isSupported().then((isSupported) => {
  if (!isSupported) return;
  analytics = getAnalytics(app);
});

export { analytics };
