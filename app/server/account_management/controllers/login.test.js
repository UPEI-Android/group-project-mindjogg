const request =require("supertest");
const app = require("../../app");



describe("POST /users/login", () => {
  
    test("should respond with a 200 status code for valid user", async () => {
        const response = await request(app).post("/users/login").send({
            //Using exsiting user test data
                "UserName": "befi",
                "Password": "password123"
        })
        jest.setTimeout(1000);
        expect(response.statusCode).toBe(200);
    })

    test("should respond with a 401 status code wrong password", async () => {
        const response = await request(app).post("/users/login").send({
            //Using exsiting user test data wrong password
                "UserName": "befi",
                "Password": "password1234"
        })
        jest.setTimeout(1000);
        expect(response.statusCode).toBe(401);
    })

    test("should respond with a 401 status code non existen user", async () => {
        const response = await request(app).post("/users/login").send({
            //Using exsiting user test data
                "UserName": "bef12fi",
                "Password": "password123"
        })
        jest.setTimeout(1000);
        expect(response.statusCode).toBe(401);
    })
});

