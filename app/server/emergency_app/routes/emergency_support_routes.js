// Import required dependencies and modules
const express = require("express");
const router = express();
const verifyAdmin= require("./verifyTokenAdmin");

//importing controler
const emergency_controller = require("../controllers/emergency_controller")


// getting list of emergency data objects
router.get("/emergency/list", emergency_controller.getEmergencyList);

//creating an emergency support
router.post("/emergency/create", verifyAdmin, emergency_controller.emergencySupportCreate);


module.exports = router;