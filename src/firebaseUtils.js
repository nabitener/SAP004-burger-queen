import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase-firestore';

const config = {
    apiKey: "AIzaSyCwiHfwuy0--kfpqdB3Y_c5guLvpF4J5Ys",
    authDomain: "burger-queen-c8a97.firebaseapp.com",
    databaseURL: "https://burger-queen-c8a97.firebaseio.com",
    projectId: "burger-queen-c8a97",
    storageBucket: "burger-queen-c8a97.appspot.com",
    messagingSenderId: "560593051235",
    appId: "1:560593051235:web:f2137a9272debf232e2256"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseAuth = firebase.auth();
export const firebaseStore = firebase.firestore();
