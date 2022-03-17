const express = require("express");
const app = express();
const accountManagementApp = require("./account_management/account_management_app");
const emergencySupportApp= require("./emergency_app/emergency_support_app");
const moodTrackerApp= require("./moodtracker_app/moodtracker_app");
const journalEntry_app= require("./journalEntry_app/journalEntry_app");


//backend apps, more to be added as developed
app.use(accountManagementApp);
app.use(emergencySupportApp);
app.use(journalEntry_app);
app.use(moodTrackerApp);




module.exports = app;