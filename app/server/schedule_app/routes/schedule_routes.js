// Import required dependencies and modules
const express = require("express");
const router = express();
const verify= require("./verifyToken");

// Import user management controller
const journalEntry_controller = require("../controllers/schedule_controller");

//schedule routes
router.post("/users/addScheduleEntry",verify, journalEntry_controller.updateSchedule);


//get schedule info for logged in user
router.get("/users/getSchedule",verify,journalEntry_controller.getUserSchedule);


module.exports = router;



