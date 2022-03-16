
const bcrypt = require("bcrypt");
const path = require("path");
const nodemailer = require("nodemailer");
var hbs = require("nodemailer-express-handlebars");

const { gmail_password, gmail_user, jwtSecret,jwtSecretAdmin,host, port} = require("../../config/server_config");
const jwt = require("jsonwebtoken");

//user database
const User = require("./schema/user_schema")

//defining the template path
const handlebarOptions = {
    viewEngine: {
      extName: ".handlebars",
      partialsDir: path.resolve("./views"),
      defaultLayout: false,
    },
    viewPath: path.resolve("./views"),
    extName: ".handlebars",
  }
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

//assigning the temmplate path to the transporter
  transporter.use("compile", hbs(handlebarOptions));

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
            userDOB: null,
            admin: user.admin,
            userVerified:false,
            userPhone: null,
            userGoals: null,
            userTasks: null,
            userJournal: null,
            userMood:[]
        });

        // returnMessage will be used to return the status of the creation of the user
        const returnMessage = {
            status: null,
            message: null
        };

        //check if username exist in database
        const result= await User.findOne({userName:user.userName},{"userName":1})

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
            const secret= jwtSecret+user.userName;
            const token = jwt.sign(user.userName,secret);
            const user_id=user.userName ;
            const link = `http://${host}/users/verify/${user_id}/${token}`

             
            //Creates an Option that stores receiver email +content of verification email
            const mailOptions = { 
                from: gmail_user,
                to: user.userEmail,
                subject: "Your MindJOGG account has been created.",
                template: "verificationEmail",
                context: {
                    title: user.userFirstName,
                    verification_link: link
                  }
            };

            //sends verification email to user
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                console.log(error);
                } else {
                returnMessage.message="Email sent: " + info.response;
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
            message: null,
            data: null
        };
      //function searching database for existing user

          //projection is what fields the query should return below
          const projection = {
            "_id":1,
            "userName": 1,
            "userPassword": 1,
            "admin": 1
           // "userVerified": 1
           }
          //finding user that matches username entered by passing query for username + projection defined above

         const result= await User.findOne({userName:user.userName},projection)
         if(result){
             //if user is verified 
           // if(result.userVerified){
                //finding if password matches entered one
                if( await bcrypt.compare(user.password, result.userPassword)){
                    returnMessage.status = 200;
                    returnMessage.message = "User successfully logged in";
                    let token ="";
                    if(result.admin==false){
                    //create authorization token
                     token = jwt.sign({_id:result._id},jwtSecret);
                    }
                    else{
                        token = jwt.sign({_id:result._id},jwtSecretAdmin);
                    }
                    //send token to app
                    returnMessage.data=token;
                }
                else{
                    console.log("Wrong password");
                    returnMessage.message = "Wrong password";
                    returnMessage.status = 401;
                }
            /*  } 
              else {
                 returnMessage.message = "Please verify your account";
                 returnMessage.status = 400;
             } */

        }
        else{
            returnMessage.message = "Username not found";
            returnMessage.status = 401;
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
        const result = await User.find({});
       return result;
    } catch (err) {
        console.log(err);
    }
};


/**
 *  Retrieves a user from the database only by the admin.
*/
const getUserInfo = async (user) => {
    try {   
        const projection = {
            "_id":1,
            "userName": 1,
           "userFirstName":1,
           "userMiddleName": 1,
           "userLastName": 1,
           "userEmail": 1,
           "userDOB": 1,
           "admin": 1,
           "userPhone": 1,
           "userGoals": 1,
           "userTasks": 1,
           "userJournal": 1
           }
        //returns list of users
        const result= await User.findOne({_id:user._id},projection);
        return result;
    } catch (err) {
        console.log(err);
    }
};



/**
 *  checks if User has existing email or username then sends user reset email
*/
const forgotPassword = async (user) => {
    try {

        // returnMessage will be used to return the status of the creation of the user
        const returnMessage = {
            status: null,
            message: null
        };
    

        //projection is what fields the query should return below
        const projection = {
            "_id":1,
            "userName": 1,
            "userFirstName":1,
            "userPassword": 1,
            "userEmail":1
           }

        //checks if user have  username or email that exists
        const result= await User.findOne({ $or: [ { userName:user.userName}, { userEmail:user.userEmail } ] },projection)
       
        
         if(result){
            
            //generating link for reset password which is valid for 15min only
            const secret= jwtSecret+result.userPassword;
            const token = jwt.sign(user,secret,{expiresIn: "15m"});
            const user_id=result._id.valueOf() ;
            const link = `http://${host}:${port}/resetPassword/${user_id}/${token}`




           //Creates an Option that stores receiver email +content of verification email
            const mailOptions = { 
                from: gmail_user,
                to: user.userEmail,
                subject: "Reset your MindJOGG password!",
                template: "resetPassword",
                context: {
                    title: result.userFirstName,
                    verification_link: link
                  }
            };

            //sends verification email to user
             transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                console.log(error);
                } else {
                    returnMessage.message ="Email sent: " + info.response;
                    returnMessage.status = 200;
                }
            });
            returnMessage.message = "Reset link sent to email";
            returnMessage.status = 200;
         }
         else{

            returnMessage.message = "Username not found";
            returnMessage.status = 401;
        
         }
       return returnMessage;

    } catch (err) {
        console.log(err);
    }
};


/**
 *  Verifies token, then allows user to reset password
*/
const resetPassword = async (user) => {
    // returnMessage will be used to return the status of the creation of the user
    const returnMessage = {
        status: null,
        message: null
    };

    try { 
         //finding user that matches username entered by passing query for id
        const result= await User.findById(user.id)
        if(result){
            const secret = jwtSecret+result.userPassword;
            try{
                //checking if token is valid or not
                jwt.verify(user.token,secret);
                console.log("user verified");
                const hashedPassword = await bcrypt.hash(user.password, 10);
                //updating password in database
                await User.findByIdAndUpdate(user.id, { userPassword: hashedPassword });
                console.log("user password updated");
                returnMessage.message = "Password updated for "+result.userEmail;
                returnMessage.status = 200;
            }
            catch(error){
                console.log(error)
                returnMessage.message = "Password Reset Link expired";
                returnMessage.status = 400;
            }
        }
        else{
            returnMessage.message = "User not found";
            returnMessage.status = 400;        }
       return returnMessage;
    } catch (err) {
        console.log(err);
    }
};



/**
 *  Verifies user
*/
const verifyUser = async (user) => {
    // returnMessage will be used to return the status of the creation of the user
    const returnMessage = {
        status: null,
        message: null
    };

        //projection is what fields the query should return below
        const projection = {
            "_id":1,
            "userName": 1,
            "userPassword": 1,
            "admin": 1,
            "userVerified": 1
           }

    try { 
         //finding user that matches username entered by passing query for username
         const result= await User.findOne({userName:user.userName},projection)
        if(result){
            const secret = jwtSecret+result.userName;
            try{
                //checking if token is valid or not
                jwt.verify(user.token,secret);
                console.log("user verified");
                //updating password in database
                await User.findByIdAndUpdate(result._id, { userVerified: true });
                returnMessage.message = "You are verified, Please log in to app";
                returnMessage.status = 200;
            }
            catch(error){
                console.log(error)
                returnMessage.message = "verification Link expired";
                returnMessage.status = 400;
            }
        }
        else{
            returnMessage.message = "User not found";
            returnMessage.status = 400;        }
       return returnMessage;
    } catch (err) {
        console.log(err);
    }
};


/**
 *  updates personal information of user
*/
const updatePersonalInfo = async (user) => {
    // returnMessage will be used to return the status of the creation of the user
    const returnMessage = {
        status: null,
        message: null
    };

    try { 
         //finding user that matches username entered by passing query for id
        const result= await User.findById(user.id)
        if(result){
               //updating user info in database
               await User.findByIdAndUpdate(user.id, { 
                   //fields to be updated
                    userFirstName: user.userFirstName,
                    userMiddleName: user.userMiddleName,
                    userLastName: user.userLastName,
                    userDOB: user.userDOB
                });
               console.log("user data updated");
               returnMessage.message = "user data updated";
               returnMessage.status = 200;
        }
        else{
        returnMessage.message = "User not found";
        returnMessage.status = 400; 
     }
   return returnMessage;
} catch (err) {
    console.log(err);
}
};

/**
 *  updates contact information of user
*/
const updateContactInfo = async (user) => {
    // returnMessage will be used to return the status of the creation of the user
    const returnMessage = {
        status: null,
        message: null
    };

    try { 
         //finding user that matches username entered by passing query for id
        const result= await User.findById(user.id)
        if(result){
               //updating user info in database
               await User.findByIdAndUpdate(user.id, { 
                   //fields to be updated
                    userEmail: user.userEmail,
                    userPhone: user.userPhone
                });
               console.log("user contact updated");
               returnMessage.message = "user contact updated";
               returnMessage.status = 200;
        }
        else{
        returnMessage.message = "User not found";
        returnMessage.status = 400;        }
   return returnMessage;
} catch (err) {
    console.log(err);
}
};

module.exports = {
    createUser,
    loginUser,
    getUserList,
    getUserInfo,
    forgotPassword,
    resetPassword,
    updatePersonalInfo,
    updateContactInfo,
    verifyUser
 };
