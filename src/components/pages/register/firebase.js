import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    // Your firebase credentials
    apiKey: "AIzaSyDpLwCnF1xddIkcxJf-gEkz0Sdy8AJjPZk",
    authDomain: "namaste-startup2.firebaseapp.com",
    projectId: "namaste-startup2",
    storageBucket: "namaste-startup2.appspot.com",
    messagingSenderId: "571844880328",
    appId: "1:571844880328:web:faca3846d1927db335c2fd"

});

var db = firebaseApp.firestore();

export { db };