const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');

app.use(express.json({limit: '100mb'}));

app.use(cors({
    origin: "*",
    methods: ["GET","POST","DELETE"]
  }))

app.get("/", (req, res) => {
    res.send("hi")
})


app.listen(3001);
