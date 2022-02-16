
const model = require("../models/user_management_model");


/**
 * This is the controller function for the user creation.
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
      
        const result = await model.createUser(user);

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
        const result = await model.loginUser(user);
        const token = result.data;
       
        if (result.status == 200) {
            res.status(200);
            res.header("auth-token",token).send(token);
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
        const result = await model.getUserList();
        res.status(200);
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.meassage);
    }
};

/**
 * This is the controller function for the user forget password.
 * @param {HTTP object} req this is the request object
 * @param {*} res this is the response object
 */
 const userForgetPassword = async (req, res) => {
    try {
        const user = {
            userName: req.body.UserNameorEmail,
            userEmail: req.body.UserNameorEmail
        }
        const result = await model.forgotPassword(user);
        
       
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
 * This is the controller function for the user reset password.
 * @param {HTTP object} req this is the request object
 * @param {*} res this is the response object
 */
 const userResetPassword = async (req, res) => {

    const User_id= req.params.id;
    const User_token= req.params.token;

    try {
        const user = {
            id: User_id,
            token: User_token,
            password: req.body.Password
        }   
        console.log(req.body.Password)
        const result = await model.resetPassword(user);     

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
 * This is the controller function for the edit profile personal information view
 * @param {HTTP object} req this is the request object
 * @param {*} res this is the response object
 */
 const updatePersonalInfo = async (req, res) => {
        const User_id= req.params.id;
    
        try {
            const user = {
                id: User_id,
                userFirstName:req.body.userFirstName,
                userMiddleName: req.body.userMiddleName,
                userLastName: req.body.userLastName,
                userDOB: req.body.userDOB
            }   
            const result = await model.updatePersonalInfo(user);     
    
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
 * This is the controller function for the edit profile personal information view
 * @param {HTTP object} req this is the request object
 * @param {*} res this is the response object
 */
 const updateContactInfo = async (req, res) => {

    try {
        const user = {
            id: req.user,
            userEmail: req.body.userEmail,
            userPhone: req.body.userPhone
        }   
        const result = await model.updateContactInfo(user);     

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



module.exports = {
    userRegistration,
    userLogin,
    getUserList,
    userForgetPassword,
    userResetPassword,
    updatePersonalInfo,
    updateContactInfo
};