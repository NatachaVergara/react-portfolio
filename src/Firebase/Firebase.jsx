// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"




// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0tfs0IqO8rkhBEMI4DcHopvzE7HBONco",
    authDomain: "portfolio-c32fd.firebaseapp.com",
    projectId: "portfolio-c32fd",
    storageBucket: "portfolio-c32fd.appspot.com",
    messagingSenderId: "918356438431",
    appId: "1:918356438431:web:dfc8460c401d5face3e1aa"
};


// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app,  { useFetchStreams: false })
export { db }
