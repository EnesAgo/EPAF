import express from 'express';
import fs from 'fs';
import cors from 'cors';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, addDoc } from "firebase/firestore"; 

const app = express();

/**
   const querySnapshot = await getDocs(collection(db, "events"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
 */

const firebaseApp = initializeApp({
  apiKey: "AIzaSyA4x5xmMheuGO9zjEipeN7shrtVikUeAtA",
  authDomain: "epaf-database.firebaseapp.com",
  projectId: "epaf-database",
  storageBucket: "epaf-database.appspot.com",
  messagingSenderId: "992102691170",
  appId: "1:992102691170:web:075a5fa03805edf223fc3b"
});

// Initialize Firebase
const db = getFirestore();


let objs = [];


app.use(express.json({limit: '100mb'}));

app.use(cors({
    origin: "*",
    methods: ["GET","POST","DELETE"]
  }))

  let title = "";

app.post("/post", async (req, res) => {
  title = req.body.title;

  let isHappend = true;

  try {
    const docRef = await addDoc(collection(db, "events"), {
      lat: req.body.lat,
      lon: req.body.lon,
      description: req.body.description,
      encodedFile: `data:image/png;base64,${req.body.encodedFile}`
    });
    console.log("Document written with ID: ", docRef.id);
    isHappend = true;
  } catch (e) {
    console.error("Error adding document: ", e);
    isHappend = false;
  }

  // console.log(req.body)

  res.json(isHappend)
});



app.listen(3001);
