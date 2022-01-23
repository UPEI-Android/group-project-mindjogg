
const bcrypt = require("bcrypt");

//user database
const User = require("./schema/user_schema")

/**
 * Creates a new user and adds it to the database if it doesn't already exist.
 * @param {Object} user the user object to be added to the database
 */
const createUser = async (user) => { 
    try {
        //TODO: check if user already exists if not then add the user to the database otherwise return a message that the user already exists. A helper function should be created to check if the user already exists.

        //hashing password that was retrieved from user with Salt 10
        const hashedPassword = await bcrypt.hash(user.password, 10);
        //adding attributes to new user 
        const newUser = new User({
            userName: user.userName,
            userPassword: hashedPassword,
            userFirstName: user.userFirstName,
            userMiddleName:null,
            userLastName: user.userLastName,
            userEmail: user.userEmail,
            userGoals: null,
            userTasks: null,
            userJournal: null,
            userMood:null
       
        });

        console.log("passed to database");
        console.log(newUser);


        // returnMessage will be used to return the status of the creation of the user
        let returnMessage = {
            status: null,
            message: null
        };

        //pushing user object to database
        newUser.save();
        returnMessage.status = 201;
        returnMessage.message = "User successfully created";
        return returnMessage;

      
        /* //return true if user was created successfully 
        //TODO: Check if the user is created successfully in the database by checking the status code of the database response
        
       
        if(usersList.includes(newUser)){
            returnMessage.status = 201;
            returnMessage.message = "User successfully created";
        } else {
            returnMessage.status = 400;
            returnMessage.message = "User already exists";
        }
        return returnMessage; */
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
        let  returnMessage = {
            status: null,
            message: null
        };
      //function searching database for existing user
       
        User.find({userName:user.userName})
        .then(resultData => {
                   //comparing password to authenticate user
                  bcrypt.compare(user.password, resultData[0].userPassword).then(found=>{
                    if(found){
                        returnMessage.status = 200;
                        returnMessage.message = "User successfully logged in";
                        console.log("User successfully logged in")    
                        
                    }
                    else{
                        returnMessage.status = 401;
                        returnMessage.message = "Wrong password";
                          //for debuging purposes
                        console.log("Wrong password" )
                    }
                })
          }); 
             
        return returnMessage;//returns null for  some reason it is not having values assigned in the promise above from line 85,86,91,92
    } catch (err) {
        console.log(err);
    }
};

/**
 *  Retrieves a user from the database only by the admin.
*/
const getUserList = async () => {
    try {
        // TODO: check if the user is an admin
        //returns list of users
        let result = User.find({});
       return result;
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    createUser,
    loginUser,
    getUserList
 };
