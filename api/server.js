const express = require('express');
const fs = require('fs');
const cors = require('cors');
const Event = require("./Event")

const app = express();

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

  const event = await Event.create({
    class: "a",
    lat: parseFloat(req.body.lat),
    lon: parseFloat(req.body.lon),
    description: req.body.description,
    encodedImg: req.body.encodedFile
  })

  // console.log(typeof(req.body.lat))

  await event.save()

  console.log("hi")

  res.json(isHappend)
});

app.get("/post", async (req, res) => {
  const allEvents = await Event.find({class: "a"});
  res.json(allEvents)
})

app.listen(3001);
