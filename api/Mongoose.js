const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://epaf:epaf@cluster0.lh5sp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", () => {
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
