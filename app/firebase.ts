// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";
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
const app = initializeApp(firebaseConfig);
let analytics: Analytics | undefined;
isSupported().then((isSupported) => {
  if (!isSupported) return;
  if (!firebaseConfig.projectId) return;
  analytics = getAnalytics(app);
});

export { analytics };
