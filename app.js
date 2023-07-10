// jshint esversion:7
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js");

// using EJS; npm i ejs
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

let inputs = [""];

app.listen(3000, function () {
  console.log("Server port 3000 started");
});

app.get("/", function (req, res) {
  let day = date.getDate();

  res.render("list", {
    dayToday: day,
    newListItem: inputs,
  });
});

app.post("/", function (req, res) {
  const input = req.body.toDoList;
  inputs.push(input);
  //   insted of adding newListItem, move it to the first res.render, and add redirect route to start again the app.get
  res.redirect("/");
});

console.log(module.exports);
