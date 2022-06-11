// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkHy8IIApwqulkNi2_efxT0Wa52M_9xgE",
  authDomain: "netflix-clone-3564b.firebaseapp.com",
  projectId: "netflix-clone-3564b",
  storageBucket: "netflix-clone-3564b.appspot.com",
  messagingSenderId: "619586197916",
  appId: "1:619586197916:web:982a94797944737537d059",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
