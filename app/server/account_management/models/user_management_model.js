//const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
//const { userSchema } = require("./database/schema/user_schema");

// Temporary user database
let usersList = [];

/**
 * Creates a new user and adds it to the database if it doesn't already exist.
 * @param {Object} user the user object to be added to the database
 */
const createUser = async (user) => { 
    try {
        //TODO: check if user already exists if not then add the user to the database otherwise return a message that the user already exists. A helper function should be created to check if the user already exists.

        //hashing password that was retrieved from user with Salt 10
        const hashedPassword = await bcrypt.hash(user.password, 10);
        //adding hashed password to user obj
        const newUser = {
            userName: user.userName,
            password: hashedPassword,
            userFirstName: user.userFirstName,
            userLastName: user.userLastName,
            userEmail: user.userEmail
        };

        //pushing user object to array, later will push to database
        usersList.push(newUser);

        //return true if user was created successfully 
        //TODO: Check if the user is created successfully in the database by checking the status code of the database response
        
        // returnMessage will be used to return the status of the creation of the user
        let returnMessage = {
            status: null,
            message: null
        };
        if(usersList.contains(newUser)){
            returnMessage.status = 201;
            returnMessage.message = "User successfully created";
        } else {
            returnMessage.status = 400;
            returnMessage.message = "User already exists";
        }
        return returnMessage;
    } catch (err) {
        console.log(err);
    }
};

/**
 * Retrieves a user from the database.
 * @param {object} user the user object of the user to be retrieved
 * @returns {string} which describes the status of the retrieval
*/
const loginUser = async (user) => {
    try {
        // returnMessage will be used to return the status of the user login
        let returnMessage = {
            status: null,
            message: null
        };
      //checks array if user is registered and retrieving the user details, will later be replaced by function searching database
       const result = usersList.find(user => user.userName === result.userName);
       if (result == null) {
            returnMessage.status = 404;
            returnMessage.message = "User does not exist";
        } else {
            if(await bcrypt.compare(user.password, result.password)) {
                returnMessage.status = 200;
                returnMessage.message = "User successfully logged in";
            } else {
                returnMessage.status = 401;
                returnMessage.message = "Wrong password";
            }
        }
        return returnMessage;
    } catch (err) {
        console.log(err);
    }
};

/**
 *  Retrieves a user from the database only by the admin.
*/
const getUserList = async () => {
    try {
        // TODO: retrive the user list from the database
        // TODO: check if the user is an admin
        // TODO: return usersList;
        return  usersList;
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    createUser,
    loginUser,
    getUserList
 };
