// jshint esversion:7
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// using EJS; npm i ejs
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

let inputs = [""];

app.listen(3000, function () {
  console.log("Server port 3000 started");
});

app.get("/", function (req, res) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
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

  let whatDay = "";

  if (currentDay === 6 || currentDay === 0) {
    whatDay = "Weekend";
  } else {
    whatDay = "Weekday";
  }
  res.render("list", {
    dayToday: whatDay,
    specificDay: dayNames[currentDay],
    newListItem: inputs,
  });
});

app.post("/", function (req, res) {
  const input = req.body.toDoList;
  inputs.push(input);
  //   insted of adding newListItem, move it to the first res.render, and add redirect route to start again the app.get
  res.redirect("/");
});
