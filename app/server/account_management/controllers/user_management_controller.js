const model = require("../models/user_management_model");

/**
 * This is the conteroller function for the user creation.
 * @param {HTTP object} req this is the request object
 * @param {HTTP object} res this is the response object
 */
const userRegistration = async (req, res) => {
    try {
        //adding attributes to user obj
        const user = {
        userName: req.body.UserName,
        password: req.body.Password,
        userFirstName: req.body.FirstName,
        userLastName: req.body.LastName,
        userEmail: req.body.Email
        }
      
        let result = await model.createUser(user);

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

/**
 * This is the controller function for the user login.
 * @param {HTTP object} req this is the request object
 * @param {*} res this is the response object
 */
const userLogin = async (req, res) => {
    try {
        const user = {
            userName: req.body.UserName,
            password: req.body.Password
        }

        let result = await model.loginUser(user);
       
        if (result.status == 200) {
            res.status(200);
            res.json(result.message);
        } else if (result.status == 401) {
            res.status(401);
            res.json(result.message);
        }
        
    } catch (err) {
        res.status(500);
        res.json(err.meassage);
    }
};

/**
 * This is for testing purposes or admin purposes.
 */
const getUserList = async (req, res) => {
    try {
        let result = await model.getUserList();
        res.status(200);
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.meassage);
    }
};

module.exports = {
    userRegistration,
    userLogin,
    getUserList
};