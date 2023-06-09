import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCHz5VEl01WroAWmJxvFjT254R0quEKUgA",
    authDomain: "taskerrr-41b89.firebaseapp.com",
    projectId: "taskerrr-41b89",
    storageBucket: "taskerrr-41b89.appspot.com",
    messagingSenderId: "708011874542",
    appId: "1:708011874542:web:31f2e37f3e8a558bae7bff",
    measurementId: "G-TS48L8E4ZF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }
