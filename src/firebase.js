// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR26b2WkbKgJvNehu-zAtlfXxfWo1jCTs",
  authDomain: "todo-list-ce3b1.firebaseapp.com",
  projectId: "todo-list-ce3b1",
  storageBucket: "todo-list-ce3b1.appspot.com",
  messagingSenderId: "869159268819",
  appId: "1:869159268819:web:bac8a064a11dec42d07f26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  db = getFirestore(app); 