// jshint esversion:7
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function (req, res) {
  res.send("Hi");
});

app.listen(3000, function () {
  console.log("Server port 3000 started");
});
