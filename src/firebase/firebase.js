import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClCGlUdURnb6ygXo-sySdNkaoqs1AZRY4",
  authDomain: "react-grocery-app-499c6.firebaseapp.com",
  projectId: "react-grocery-app-499c6",
  storageBucket: "react-grocery-app-499c6.appspot.com",
  messagingSenderId: "451669735838",
  appId: "1:451669735838:web:bf1b512093b440a0167e8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth}