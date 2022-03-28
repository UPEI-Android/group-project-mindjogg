// Import required dependencies and modules
const express = require("express");
const router = express();
const verify= require("./verifyToken");


// Import user management controller
const moodtracker_controller = require("../controllers/moodtracker_controller");

//mood tracker routes
router.post("/moodtracker/addmood",verify, moodtracker_controller.updateMoodInfo);


//get Mood info for logged in user
router.get("/moodtracker/getMood",verify, moodtracker_controller.getMoodhistory);

//get Mood info frequency for logged in user
router.get("/moodtracker/frequencyMoods",verify, moodtracker_controller.frequencyMoods);

module.exports = router;



