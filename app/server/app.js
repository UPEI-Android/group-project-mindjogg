const express = require("express");
const app = express();
const accountManagementApp = require("./account_management/account_management_app");

//backend apps, more to be added as developed
app.use(accountManagementApp);



module.exports = app;