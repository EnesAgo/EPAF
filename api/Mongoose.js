const mongoose = require("mongoose")

require("dotenv").config()

mongoose.connect(process.env.MONGODB_URI, () => {
  console.log("connected");
},
e => {
console.log(e)
})

const eventSchema = new mongoose.Schema({
  idNo: Number,
  class: String,
  dateTime: String,
  place: String,
  lat: Number,
  lon: Number,
  description: String,
  encodedImg: String,
  interestedPeople: Number
})

const tripsuggestionSchema = new mongoose.Schema({
  idNo: Number,
  class: String,
  lat: Number,
  lon: Number,
  title: String,
  description: String,
  encodedImg: String,
  sendFrom: String,
  likes: Number,
  place: String,
  // generalInfo: String
})

module.exports = {
  Event: mongoose.model("Event", eventSchema),
  Tripsuggestion: mongoose.model("Tripsuggestion", tripsuggestionSchema)
  
}
