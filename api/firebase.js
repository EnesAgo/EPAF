const firebase = require("firebase")

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA4x5xmMheuGO9zjEipeN7shrtVikUeAtA",
  authDomain: "epaf-database.firebaseapp.com",
  projectId: "epaf-database",
  storageBucket: "epaf-database.appspot.com",
  messagingSenderId: "992102691170",
  appId: "1:992102691170:web:075a5fa03805edf223fc3b"
});

// Initialize Firebase
const db = firebaseApp.firestore();
