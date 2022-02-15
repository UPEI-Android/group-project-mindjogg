// Import required dependencies and modules
const express = require("express");
const router = express();
//importing controler
const emergency_controller = require("../controllers/emergency_controller")


// getting list of emergency data objects
router.get("/emergency/list", emergency_controller.getEmergencyList);

//creating an emergency support
router.post("/emergency/create", emergency_controller.emergencySupportCreate);
