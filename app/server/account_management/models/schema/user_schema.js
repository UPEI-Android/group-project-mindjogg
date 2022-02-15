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
  userGoals: [String],
  userTasks: [String],
  userJournal: String,

  userMood: {
    Happy: {
      status: Boolean,
      percentage: Number,
    },

    Sad: {
      status: Boolean,
      percentage: Number,
    },

    Stressed: {
      status: Boolean,
      percentage: Number,
    },

    Angry: {
      status: Boolean,
      percentage: Number,
    },

    Anxious: {
      status: Boolean,
      percentage: Number,
    },

    Bored: {
      status: Boolean,
      percentage: Number,
    },

    Hopeful: {
      status: Boolean,
      percentage: Number,
    },

    Depressed: {
      status: Boolean,
      percentage: Number,
    },
  },
});

const User = mongoose.model("User",userSchema)
module.exports = User;


