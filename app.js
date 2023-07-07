// jshint esversion:7
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function (req, res) {
  const today = new Date();
  const currentDay = today.getDay();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (currentDay === 6 || currentDay === 0) {
    res.write(`<h1>Today is ${dayNames[currentDay]} and its weekend</h1>`);
    res.send();
  } else {
    res.write(`<h1>Today is ${dayNames[currentDay]} and its weekday</h1>`);
    res.send();
  }
});

app.listen(3000, function () {
  console.log("Server port 3000 started");
});
