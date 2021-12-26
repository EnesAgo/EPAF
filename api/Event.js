const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://epaf:epaf@cluster0.lh5sp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", () => {
  console.log("connected");
},
e => {
console.log(e)
})

const eventSchema = new mongoose.Schema({
  class: String,
  lat: Number,
  lon: Number,
  description: String,
  encodedImg: String
})

module.exports = mongoose.model("Event", eventSchema);