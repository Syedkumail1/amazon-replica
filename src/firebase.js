import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAUR3hjthGyEKOO3BS1Sr0OQLfVWnh6FJs",
  authDomain: "replica-e6dfd.firebaseapp.com",
  databaseURL: "https://replica-e6dfd.firebaseio.com",
  projectId: "replica-e6dfd",
  storageBucket: "replica-e6dfd.appspot.com",
  messagingSenderId: "884062833443",
  appId: "1:884062833443:web:2c8466acc564ecb6031a96",
  measurementId: "G-3BBBDNSZL0"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };