// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDVOVlOCevFjxgXWXa0F0ZbkjRzrDYedTw",
    authDomain: "onlineretail-project.firebaseapp.com",
    databaseURL: "https://onlineretail-project-default-rtdb.firebaseio.com/",
    projectId: "onlineretail-project",
    storageBucket: "onlineretail-project.appspot.com",
    messagingSenderId: "487090577726",
    appId: "1:487090577726:web:0c8844a143d4ea82190c6f",
    measurementId: "G-YJHFN7FZV5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};