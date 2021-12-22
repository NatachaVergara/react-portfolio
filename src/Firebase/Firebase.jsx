// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0tfs0IqO8rkhBEMI4DcHopvzE7HBONco",
    authDomain: "portfolio-c32fd.firebaseapp.com",
    projectId: "portfolio-c32fd",
    storageBucket: "portfolio-c32fd.appspot.com",
    messagingSenderId: "918356438431",
    appId: "1:918356438431:web:dfc8460c401d5face3e1aa"
};


export const app = firebase.initializeApp(firebaseConfig);


export function getFirestore() {
    return firebase.firestore(app)
}