//This file holds the schema of the Database
//Check out the readme in this folder for more information

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: String,
  userPassword: String,
  userFirstName: String,
  userMiddleName: String,
  userLastName: String,
  userEmail: String,
  userDOB: Date,
  admin: Boolean,
  userVerified:Boolean,
  userPhone: String,
  userGoals: [String],
  userTasks: [String],
  userJournal: String,

  userMood: []
  ,
});

const User = mongoose.model("User",userSchema)
module.exports = User;


