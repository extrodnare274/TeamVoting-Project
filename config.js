import firebase from 'firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuE_wpxsdNArPAVF0cQ8iPv0h6ldIl0a8",
  authDomain: "team-voting-project-711c3.firebaseapp.com",
  projectId: "team-voting-project-711c3",
  storageBucket: "team-voting-project-711c3.appspot.com",
  messagingSenderId: "691022260238",
  appId: "1:691022260238:web:6287f09f845097c7baf45f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebase.database();