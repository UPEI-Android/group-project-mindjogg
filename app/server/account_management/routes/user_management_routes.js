// Import required dependencies and modules
const express = require("express");
const router = express();
const verify= require("./verifyToken");
const verifyAdmin= require("./verifyTokenAdmin");


// Import user management controller
const userManagementController = require("../controllers/user_management_controller");

//credential system routes
router.post("/users/register", userManagementController.userRegistration);
router.post("/users/login", userManagementController.userLogin);
router.post("/users/forgetPassword",userManagementController.userForgetPassword);
router.post("/users/resetPassword/:id/:token",userManagementController.userResetPassword);
router.get("/users/verify/:userName/:token",userManagementController.verifyUser);


//update profile routes
router.patch("/users/edit/personalinfo", verify,userManagementController.updatePersonalInfo);
router.patch("/users/edit/contactinfo",verify, userManagementController.updateContactInfo);


/* To make a route private to that user, only need to add "verify" function as middle ware*/
// testing purposes or admin purposes
router.get("/users",verifyAdmin, userManagementController.getUserList);

//gets info for single user
router.get("/userInfo",verify, userManagementController.getUserInfo);


router.get("/hello", function(req, res){
    res.redirect("http://google.com");
});
  

module.exports = router;