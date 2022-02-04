const model = require("../models/user_management_model");
const database= require("../../database/database_connection")

//connecting to database
database.connect();


//dummy login data
const userLoginData = {
    userName: "befi",
    password: "password123"
}

//testing if user login works
test("User logged Properly", async() =>{
    const result = await model.loginUser(userLoginData);
    expect(result.status).toBe(200);
});


