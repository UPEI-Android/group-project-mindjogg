// Import required dependencies and modules
const express = require("express");
const router = express();
const verify= require("./verifyToken");

// Import user management controller
const goalSetter_app_controller = require("../controllers/goalSetter_app_controller");

//mood tracker routes
router.post("/users/addGoal",verify, goalSetter_app_controller.addGoal);


//get Mood info for logged in user
router.get("/users/getGoal",verify,goalSetter_app_controller.getGoal);


module.exports = router;



