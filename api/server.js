const express = require('express');
const fs = require('fs');
const cors = require('cors');
const MongooseFile = require("./Mongoose")

const Event = MongooseFile.Event;
const Tripsuggestion = MongooseFile.Tripsuggestion;


const app = express();

app.use(express.json({limit: '100mb'}));

app.use(cors({
    origin: "*",
    methods: ["GET","POST","DELETE"]
  }))

  let title = "";

   async function deletemany() {
     await Event.deleteMany({})
  }
   //deletemany()

app.post("/post", async (req, res) => {
  let isHappend = true;

  const allEvents = await Event.count({});

  console.log(allEvents)


  const event = await Event.create({
    idNo: allEvents || 0,
    class: "a",
    dateTime:  req.body.dateTime,
    place: req.body.place,
    lat: parseFloat(req.body.lat),
    lon: parseFloat(req.body.lon),
    description: req.body.description,
    encodedImg: req.body.encodedFile
  })

  await event.save()

  console.log("hi")

  res.json(isHappend)
});

app.get("/post", async (req, res) => {
  const allEvents = await Event.find({});
  res.json(allEvents)
})

app.get("/post/:id", async (req, res) => {
  const indexNo = req.params.id;

  const specificEvent = await Event.find({idNo: parseInt(req.params.id)});

  res.json(specificEvent[0]);
})




app.post("/Tripsuggestion", async (req, res) => {

  const allTripsuggestion = await Tripsuggestion.count({});

  console.log(allTripsuggestion)


  const tripsuggestion = await Tripsuggestion.create({
    idNo: allTripsuggestion || 0,
    class: "a",
    lat: parseFloat(req.body.lat),
    lon: parseFloat(req.body.lon),
    title: req.body.title,
    description: req.body.description,
    encodedImg: req.body.encodedFile,
    sendFrom: req.body.sendFrom,
    likes: 0,
    place: req.body.place,
    generalInfo: req.body.generalInfo
  })

  await tripsuggestion.save()

  console.log("hi")

  res.json(true)
  
})

app.get("/Tripsuggestion", async (req, res) => {
  const allTripsuggestion = await Tripsuggestion.find({});

  res.json(allTripsuggestion)
})


app.listen(3001);
