const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Welcome to Mindjogg!");
  res.send("Welcome to Mindjogg!");
});

app.listen(3000, () => {
  console.log("Connection Made");
});
