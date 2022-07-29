import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";  
import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjv4NAdBUqDzmYLx-Gdw8mUfbKhtss5-A",
  authDomain: "facebookclone-e5ddc.firebaseapp.com",
  projectId: "facebookclone-e5ddc",
  storageBucket: "facebookclone-e5ddc.appspot.com",
  messagingSenderId: "1014409707010",
  appId: "1:1014409707010:web:070e4d4a93ad08761fb11b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const storage = getStorage(app)


export { db, storage }