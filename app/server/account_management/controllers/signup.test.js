const model = require("../models/user_management_model");
const database= require("../../database/database_connection")

//connecting to database
database.connect();

//generating dummy user data
const userSignupData = {
    userName: Math.random().toString(36).substring(2,7),
    password: Math.random().toString(36).substring(2,7),
    userFirstName: Math.random().toString(36).substring(2,7),
    userLastName: Math.random().toString(36).substring(2,7),
    userEmail: Math.random().toString(36).substring(2,7)+"@fae.com"
    }

//testing if user was created properly  
test("User Registered Properly", async() =>{
    const result = await model.createUser(userSignupData);
    expect(result.status).toBe(201);
});




