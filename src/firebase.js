import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBtbYSneSS1AH6nnpmY10HSXH4TKPfIrIE",
  authDomain: "todo-app-4a66e.firebaseapp.com",
  projectId: "todo-app-4a66e",
  storageBucket: "todo-app-4a66e.appspot.com",
  messagingSenderId: "254386559172",
  appId: "1:254386559172:web:3b540d0e66e6a44abc1191",
  measurementId: "G-PYK6THKDFH",
});

const db = firebaseApp.firestore();

export default db;
