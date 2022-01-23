// Import required dependencies and modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const userManagementRouter = require("./routes/user_management_routes");



// solves the CORS issue with the front end
app.use(cors());
// allows application accept json
app.use(bodyParser.json()); 
// allows application accept urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));


//Attempt to connect to MongoDB Atlas
mongoose.connect(
    "mongodb+srv://mindjogg_the_app:Mindj0Gg123@mindjoggcluster.e2dzp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (!err) console.log("Connected to Database");
      else console.log(err);
    }
  );

app.use(userManagementRouter);

module.exports = app;