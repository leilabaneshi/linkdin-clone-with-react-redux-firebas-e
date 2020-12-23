
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA6UKqILK09PlIZ6CGz0qex8GKj4dnukEk",
    authDomain: "linkdin-clone-81270.firebaseapp.com",
    projectId: "linkdin-clone-81270",
    storageBucket: "linkdin-clone-81270.appspot.com",
    messagingSenderId: "764797905547",
    appId: "1:764797905547:web:0174bfab62632f4ecbc28e",
    measurementId: "G-JVGYPER368"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };