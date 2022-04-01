const model = require("../models/journalEntry_model");


/**
 * This is the controller function to update a journal entry
 * @param {HTTP object} req this is the request object
 * @param {*} res this is the response object
 */
 const updateJournal= async (req, res) => {
    try {
        //mapping new info into new mood object
        const newEntry = { 
            type: req.body.type,
            title: req.body.title,
            entry: req.body.entry
          }
        const user = {
            id: req.user,
            journalEntry: newEntry
        }   
        const result = await model.addNewJournalRecord(user);     

        if (result.status == 200) {
            res.status(200);
            res.json(result.message);
        } else if (result.status == 401) {
            res.status(401);
            res.json(result.message);
        }
} catch (err) {
    res.status(500);
    res.json(err.message);
}
};

/**
 * Retrieves journal entries for specific user
 */
 const getUserJournal = async (req, res) => {
    try {

        const user = {
            id: req.user,
        }   
        const result = await model.getUserJournal(user);
        res.status(200);
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};



module.exports = {
    updateJournal,
    getUserJournal
};