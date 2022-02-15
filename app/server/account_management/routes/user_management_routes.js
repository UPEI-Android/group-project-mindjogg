// Import required dependencies and modules
const express = require("express");
const router = express();
const verify= require("./verifyToken");

// Import user management controller
const userManagementController = require("../controllers/user_management_controller");

router.post("/users/register", userManagementController.userRegistration);
router.post("/users/login", userManagementController.userLogin);
router.post("/users/forgetPassword",userManagementController.userForgetPassword);
router.post("/users/resetPassword/:id/:token",userManagementController.userResetPassword);

router.post("/users/register", userManagementController.userRegistration);
router.post("/users/login", userManagementController.userLogin);


/* To make a route private to that user, only need to add "verify" function as middle ware*/
// testing purposes or admin purposes
router.get("/users",verify, userManagementController.getUserList);

module.exports = router;