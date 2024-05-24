// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC47O7JG58TUpFZkCyzv-_pD86eyiA4tAk",
  authDomain: "movies-app-db729.firebaseapp.com",
  projectId: "movies-app-db729",
  storageBucket: "movies-app-db729.appspot.com",
  messagingSenderId: "79464170516",
  appId: "1:79464170516:web:89fa67d5d6ca5b8e31d301",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
