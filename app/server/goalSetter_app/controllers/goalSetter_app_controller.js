const model = require("../models/goalSetter_app_model");


/**
 * This is the controller function to update a journal entry
 * @param {HTTP object} req this is the request object
 * @param {*} res this is the response object
 */
 const addGoal= async (req, res) => {
    try {
        //mapping new info into new mood object
        const newEntry = { 
            title: req.body.title,
            specific: req.body.specific,
            measurable: req.body.measurable,
            attainable: req.body.attainable,
            relevant: req.body.relevant,
            time: req.body.time
          }
        const user = {
            id: req.user,
            goalEntry: newEntry
        }   
        const result = await model.addNewGoal(user);     

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
 const getGoal = async (req, res) => {
    try {

        const user = {
            id: req.user,
        }   
        const result = await model.getUserGoal(user);
        res.status(200);
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};



module.exports = {
    addGoal,
    getGoal
};