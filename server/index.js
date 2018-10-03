//express -- common js module
const express = require("express");
//import express -- es6 modules -- not on node yet

//define express app
const app = express();

//routes
app.get("/", (req, res) => {
  res.send({ hello: "world" });
});

// config for heroku
// if in production -- use env
const PORT = process.env.PORT || 4000;
app.listen(PORT);
