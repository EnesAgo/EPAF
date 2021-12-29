const express = require('express');
const fs = require('fs');
const cors = require('cors');
const Event = require("./Event")

const app = express();

app.use(express.json({limit: '100mb'}));

app.use(cors({
    origin: "*",
    methods: ["GET","POST","DELETE"]
  }))

  let title = "";

app.post("/post", async (req, res) => {
  title = req.body.title;

  let isHappend = true;

  // const count = await Event.find().sort({ _id: -1}).limit(1);

  // console.log(await Event.length)

  const allEvents = await Event.count({class: "a"});

  console.log(allEvents)


  const event = await Event.create({
    idNo: allEvents || 0,
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

app.get("/post/:id", async (req, res) => {
  const indexNo = req.params.id;

  const specificEvent = await Event.find({idNo: parseInt(req.params.id)});

  res.json(specificEvent[0]);
})

app.listen(3001);
