const request =require("supertest");
const app = require("../../app");



describe("POST /users/register", () => {
  
    test("should respond with a 201 status code", async () => {
        const response = await request(app).post("/users/register").send({
            //generating dummy user data
                "UserName": Math.random().toString(36).substring(2,7),
                "Password": Math.random().toString(36).substring(2,7),
                "FirstName":Math.random().toString(36).substring(2,7),
                "LastName":Math.random().toString(36).substring(2,7),
                "Email":Math.random().toString(36).substring(2,7)+"@fae.com"
        })
        expect(response.statusCode).toBe(201);
    })


    test("should respond with a 400 status code", async () => {
        const response = await request(app).post("/users/register").send({
            //  existing user test data
                "UserName": "befi",
                "Password": "password123",
                "FirstName":"bef",
                "LastName":"iwar",
                "Email":"befiwar458@mannawo.com"  
        })
        expect(response.statusCode).toBe(400);
    })

    
        
});
    