// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0YaB9q3yBXTVeWm5VRQ0qJXN3YQOLQac",
  authDomain: "student-management-syste-34594.firebaseapp.com",
  projectId: "student-management-syste-34594",
  storageBucket: "student-management-syste-34594.appspot.com",
  messagingSenderId: "288780923195",
  appId: "1:288780923195:web:b534f81b89ee5792ef071e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };