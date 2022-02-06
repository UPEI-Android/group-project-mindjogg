const request =require("supertest");
const app = require("../../app");


describe("POST /users/forgetPassword", () => {

    test("should respond with a 200 status code for valid user", async () => {
        const response = await request(app).post("/users/forgetPassword").send({
            //Using existing user test data
            "UserNameorEmail": "befiwar458@mannawo.com"
        })
        expect(response.statusCode).toBe(200);
    })

    test("should respond with a 401 status code for valid user", async () => {
        const response = await request(app).post("/users/forgetPassword").send({
            //Using existing user test data
            "UserNameorEmail": "befiwar4584@mannawo.com"
        })
        expect(response.statusCode).toBe(401);
    })

});
    