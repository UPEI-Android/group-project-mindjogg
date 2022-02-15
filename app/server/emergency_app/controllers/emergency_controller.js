const model = require("../models/emergency_model");






/**
 * This will return list of emergency support
 */
 const getEmergencyList = async (req, res) => {
    try {
        const result = await model.getEmergencyList();
        res.status(200);
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.meassage);
    }
};


/**
 * This is the controller function for the user creation.
 * @param {HTTP object} req this is the request object
 * @param {HTTP object} res this is the response object
 */
 const emergencySupportCreate = async (req, res) => {
    try {
        //adding attributes to emergency obj
        const emergency = {
      //to add fields
        }
      
        const result = await model.createEmergencySupport(emergency);

        if (result.status == 201) {
            res.status(201);
            res.json(result.message);
        } else {
            res.status(400);
            res.json(result.message);
        }

    } catch (err) {
        res.status(500);
        res.json(err.message);
    }
};



module.exports = {
    getEmergencyList,
    emergencySupportCreate
};