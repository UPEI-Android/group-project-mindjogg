const request =require("supertest");
const app = require("../../app");
const database= require("../../database/database_connection")


describe("POST /users/register", () => {
  
    test("should respond with a 201 status code", async () => {
        const response = await request(app).post("/emergency/create").send({
            //generating dummy emergency data
            "name": Math.random().toString(36).substring(2,7),
            "type": "emergency.type",
            "phone": "emergency.phone",
            "email": Math.random().toString(36).substring(2,7)+"@fae.com",
            "address":"emergency.address",
            "description": "emergency.description"
        })
        expect(response.statusCode).toBe(201);
        
    })


    test("should respond with a 400 status code", async () => {
        const response = await request(app).post("/emergency/create").send({
            //  existing emergency test data
            "name": "The Island Helpline",
            "type": "Crisis Lines/Mental Health Awareness",
            "phone": "emergency.phone",
            "email": "1-800-218-2885",
            "address":"no address",
            "description": "emergency.description"  
        })
        expect(response.statusCode).toBe(400);

    })


    test("should respond with a 201 status code", async () => {
        const response = await request(app).get("/emergency/list");
        expect(response.statusCode).toBe(201);
    });

    afterAll( () => {
        database.close();
     });
        
});

