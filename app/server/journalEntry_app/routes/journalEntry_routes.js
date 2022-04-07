// Import required dependencies and modules
const express = require("express");
const router = express();
const verify= require("./verifyToken");

// Import user management controller
const journalEntry_controller = require("../controllers/journalEntry_controller");

//mood tracker routes
router.post("/users/addJournalEntry",verify, journalEntry_controller.updateJournal);


//mood tracker routes
router.post("/users/deleteJournalEntry",verify, journalEntry_controller.deleteJournalEntry);

//get Mood info for logged in user
router.get("/users/getJournalEntries",verify,journalEntry_controller.getUserJournal);


module.exports = router;



