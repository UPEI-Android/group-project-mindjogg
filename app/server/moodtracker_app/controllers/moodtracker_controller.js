const model = require("../models/moodtracker_model");


/**
 * This is the controller function for the edit profile personal information view
 * @param {HTTP object} req this is the request object
 * @param {*} res this is the response object
 */
 const updateMoodInfo = async (req, res) => {
    try {
        //mapping new info into new mood object
        const newMood = { 
            timeofDay: req.body.timeofDay,
            moodName: req.body.moodName,
            moodNote: req.body.moodNote
          }
        const user = {
            id: req.user,
            mood: newMood
        }   
        const result = await model.addNewMoodRecord(user);     

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
 * Retrieves mood history for specific user
 */
 const getMoodhistory = async (req, res) => {
    try {

        const user = {
            id: req.user,
        }   
        const result = await model.getUserMood(user);
        res.status(200);
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

/**
 * This is the controller function for the frequencyMoods
 * @param {HTTP object} req this is the request object
 * @param {*} res this is the response object
 */
 const frequencyMoods = async (req, res) => {
    try {
        //mapping new info into new mood object

        const user = {
            id: req.user }   
        const result = await model.frequencyMoods(user);     

            res.status(200);
            res.json(result);

} catch (err) {
    res.status(500);
    res.json(err.message);
}
};



module.exports = {
    updateMoodInfo,
    getMoodhistory,
    frequencyMoods
};