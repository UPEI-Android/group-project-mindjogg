
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const { gmail_password, gmail_user} = require("../../config/server_config");

//user database
const User = require("./schema/user_schema")


/**
 * Creates a transport with sender credentials for email
 */
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmail_user,
      pass: gmail_password
    }
  });



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

        // returnMessage will be used to return the status of the creation of the user
        let returnMessage = {
            status: null,
            message: null
        };

        //check if username exist in database
        let result= await User.findOne({userName:user.userName},{"userName":1})

        //if username exists
        if(result){
            returnMessage.status = 400;
            returnMessage.message = "User already exists";
            
        }
        //if no existing user exists
        else {
           //save user object to database
            newUser.save();
            returnMessage.status = 201;
            returnMessage.message = "User successfully created";
             
            //Creates an Option that stores receiver email +content of verification email
            const mailOptions = { 
                from: gmail_user,
                to: user.userEmail,
                subject: "Your MindJOGG account has been created",
                text: "Click here (verification link to be added) to verify your account!"
            };

            //sends verification email to user
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                console.log(error);
                } else {
                console.log("Email sent: " + info.response);
                }
            });
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
        var  returnMessage = {
            status: null,
            message: null
        };
      //function searching database for existing user

          //projection is what fields the query should return below
          const projection = {
            "userName": 1,
            "userPassword": 1,
           }
          //finding user that matches username entered by passing query for username + projection defined above
         let result= await User.findOne({userName:user.userName},projection)
         if(result){
            //finding if password matches entered one
            if( await bcrypt.compare(user.password, result.userPassword)){
                returnMessage.status = 200;
                returnMessage.message = "User successfully logged in";
            }
            else{
                returnMessage.message = "Wrong password";
                returnMessage.status = 400;
            }
        }
        else{
            returnMessage.message = "Username not found";
            returnMessage.status = 400;
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
        // TODO: check if the user is an admin
        //returns list of users
        let result = await User.find({});
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
