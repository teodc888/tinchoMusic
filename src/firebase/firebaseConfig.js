// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjuV1bajujxkTqGOsdy6DjLMHapHBqZks",
  authDomain: "ratatorio.firebaseapp.com",
  projectId: "ratatorio",
  storageBucket: "ratatorio.appspot.com",
  messagingSenderId: "456715763317",
  appId: "1:456715763317:web:719831be1d9fb32a76023c",
  measurementId: "G-RCPJH0CYRE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// obtenemos la autetenticacion
const auth = getAuth();
// obtnemos la db
const db = getFirestore(app);

export { db, auth };
