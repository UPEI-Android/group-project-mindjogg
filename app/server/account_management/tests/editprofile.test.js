const request =require("supertest");
const app = require("../../app");
const database= require("../../database/database_connection");


describe("POST /users/edit/personalinfo", () => {
    const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjFjZDA0NTRhZjg4MjE2Y2ExOTkzZWUiLCJpYXQiOjE2NDYwNTU1MTF9.juyNwOQ1HEHPYSesmxQJ88NUdg2fmR7mQ_CdtU7DOt0";     
       test("should respond with a 200 status code for updated contact user info", async () => {
        const response = await request(app).patch("/users/edit/personalinfo").set("auth-token", token).send({
            //Using exsiting user test data
            "userFirstName": "Roshan",
            "userMiddleName": Math.random().toString(36).substring(2,7),
            "userLastName": Math.random().toString(36).substring(2,7),
            "userDOB": "1999-09-23"
        })
        expect(response.statusCode).toBe(200);
    })

    test("should respond with a 200 status code for updated contact user info", async () => {
        const response = await request(app).patch("/users/edit/contactinfo").set("auth-token", token).send({
            //Using exsiting user test data
            "userEmail": Math.random().toString(36).substring(2,7)+"@fae.com",
            "userPhone": "999-999-9999"
        })
        expect(response.statusCode).toBe(200);
    })


    afterAll( () => {
        database.close();
     });
      
        
});

