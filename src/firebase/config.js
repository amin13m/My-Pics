
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDss0WjeYHSazxzfputpMkZGD9Oym7XMw0",
    authDomain: "my-pics-62287.firebaseapp.com",
    projectId: "my-pics-62287",
    storageBucket: "my-pics-62287.appspot.com",
    messagingSenderId: "864392778485",
    appId: "1:864392778485:web:55ace4558f2084d0d02bbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const storage = getStorage(app)

export {db,storage}