const express = require("express");
const app = express();
const accountManagementApp = require("./account_management/account_management_app");
const emergencySupportApp= require("./emergency_app/emergency_support_app");

//backend apps, more to be added as developed
app.use(accountManagementApp);
app.use(emergencySupportApp);



module.exports = app;