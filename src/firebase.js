import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
//import { initializeApp } from 'firebase/app';
import 'firebase/compat/auth';
//import { getAuth } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtsyToTXKXvWQEEvDuVGewXN1US5Bt94k",
    authDomain: "linkedin-clone-57803.firebaseapp.com",
    projectId: "linkedin-clone-57803",
    storageBucket: "linkedin-clone-57803.appspot.com",
    messagingSenderId: "1016575093596",
    appId: "1:1016575093596:web:a73e87bd4d9dba8add2f99",
    measurementId: "G-HZPQWNSBDQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  //const auth = getAuth(firebaseApp);

  export { db , auth };
  export default firebaseApp;
