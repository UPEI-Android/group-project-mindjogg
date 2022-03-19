const model = require("../models/schedule_model");


/**
 * This is the controller function to update a journal entry
 * @param {HTTP object} req this is the request object
 * @param {*} res this is the response object
 */
 const updateSchedule= async (req, res) => {
    try {
        //mapping new info into new mood object
        const newEntry = { 
            title: req.body.title,
            start: req.body.start,
            end: req.body.end
          }
        const user = {
            id: req.user,
            taskEntry: newEntry
        }   
        const result = await model.addScheduleRecord(user);     

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
 const getUserSchedule = async (req, res) => {
    try {

        const user = {
            id: req.user,
        }   
        const result = await model.getUserSchedule(user);
        res.status(200);
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};



module.exports = {
    updateSchedule,
    getUserSchedule
};