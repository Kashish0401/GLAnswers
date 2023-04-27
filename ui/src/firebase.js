// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvXjm1CbHXj4e-DxO1qHLZPHlFhqEjWMo",
  authDomain: "glanswers.firebaseapp.com",
  projectId: "glanswers",
  storageBucket: "glanswers.appspot.com",
  messagingSenderId: "1008741090737",
  appId: "1:1008741090737:web:d432b5749f6306d0a0e990",
  measurementId: "G-W3D20HJ76W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
