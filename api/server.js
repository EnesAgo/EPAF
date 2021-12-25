const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');
// const nodemailer = require("nodemailer");
// const bodyParse = require("body-parser")
// const smtpTransport = require("nodemailer-smtp-transport")


app.use(express.json({limit: '100mb'}));

app.use(cors({
    origin: "*",
    methods: ["GET","POST","DELETE"]
  }))

  let title = "";

  // transporter.verify().then(console.log).catch(console.error);



app.get("/", (req, res) => {
  let dataa = {
    bool:true,
    // name: "somethink"
  } 
  // console.log(req.body)

  const file = fs.readFileSync("data.json");

  const products = JSON.parse(file)

  console.log(products)

  res.json(products);
  
  });


app.post("/api/report", (req, res) => {
  title = req.body.title;

  // emailData.subject = title;z

  let what = {
    bool:true
  } 
  console.log(req.body)


  res.json(JSON.stringify(what));

})
app.post("/post", (req, res) => {
  title = req.body.title;

  let what = {
    bool:true
  } 
  console.log(req.body)
  // console.log(req.file)



  res.json(JSON.stringify(what));

})
app.post("/", (req, res) => {
  title = req.body.title;

  // emailData.subject = title;z

  let what = {
    bool:true
  } 
  console.log(req.body)


  res.json(JSON.stringify(what));

})
app.get("/api/report", (req, res) => {

  // res.send(title)
  const file = fs.readFileSync("data.json");

  const products = JSON.parse(file)

  console.log(products)

  res.json(products);
})

app.listen(3001);
