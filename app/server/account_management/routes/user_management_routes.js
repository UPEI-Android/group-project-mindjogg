// Import required dependencies and modules
const express = require("express");
const router = express();

// Import user management controller
const userManagementController = require("../controllers/user_management_controller");

router.post("/users/register", userManagementController.userRegistration);
router.post("/users/login", userManagementController.userLogin);
router.post("/users/forgetPassword",userManagementController.userForgetPassword);
router.post("/users/resetPassword/:id/:token",userManagementController.userResetPassword);

router.post("/users/register", userManagementController.userRegistration);
router.post("/users/login", userManagementController.userLogin);

// testing purposes or admin purposes
router.get("/users", userManagementController.getUserList);

module.exports = router;