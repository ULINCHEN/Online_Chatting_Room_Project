// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB_MhX42eGOJmbehKPba33ZwQUytzGn_dY",
    authDomain: "slack-clone-7d275.firebaseapp.com",
    projectId: "slack-clone-7d275",
    storageBucket: "slack-clone-7d275.appspot.com",
    messagingSenderId: "948503212478",
    appId: "1:948503212478:web:b07ba663f30cfe967049ef",
    measurementId: "G-3S9FNSGVW2"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();


export { db, auth, provider };