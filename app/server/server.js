//Import dependencies
const express = require("express");
const mongoose = require("mongoose");
const { userSchema } = require("./database/schema/user_schema"); // eslint-disable-line

//ES6
//import userSchema from "../database/schema/user_schema.js";

const app = express();

//Route
app.get("/", (req, res) => {
  console.log("Welcome to Mindjogg!");
  res.send("Welcome to Mindjogg!");
});

//Attempt to connect to MongoDB Atlas
mongoose.connect(
  "mongodb+srv://mindjogg_the_app:Mindj0Gg123@mindjoggcluster.e2dzp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("Connected to Database");
    else console.log(err);
  }
);

/*
Inform MongoDB about our Schema and create a New Collection for It
Leaving this commented for testing when backend testing is set

const dataModel = new mongoose.model("User Data", userSchema);
*/

//Server listening for Port 3000
app.listen(3000, () => {
  console.log("Connection Made");
});
