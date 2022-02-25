// Import required dependencies and modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const database= require("../database/database_connection")
const emergencySupportRouter = require("./routes/emergency_support_routes");

//connecting to database
database.connect();

// solves the CORS issue with the front end
app.use(cors());
// allows application accept json
app.use(bodyParser.json()); 
// allows application accept urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(emergencySupportRouter);

module.exports = app;