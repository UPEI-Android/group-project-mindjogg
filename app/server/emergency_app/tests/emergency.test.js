const request =require("supertest");
const app = require("../../app");
const database= require("../../database/database_connection")


describe("POST /emergency/create", () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjFiYmM5ODAyYzMyNGJkYTJhOGU3Y2MiLCJpYXQiOjE2NDU5ODU3NTh9.mGSt-kajgzaBMrcEaw6iccKLH0JwAOCUKwuoE4H-hw0";
    test("should respond with a 201 status code", async () => {
        const response = await request(app).post("/emergency/create").set("auth-token", token).send({
            //generating dummy emergency data
            "name": Math.random().toString(36).substring(2,7),
            "type": "emergency.type",
            "phone": "emergency.phone",
            "email": Math.random().toString(36).substring(2,7)+"@fae.com",
            "address":"emergency.address",
            "description": "emergency.description"
        });

        expect(response.statusCode).toBe(201);
        
    })


    test("should respond with a 400 status code", async () => {
        const response = await request(app).post("/emergency/create").set("auth-token", token).send({
            //  existing emergency test data
            "name": "The Island Helpline",
            "type": "Crisis Lines/Mental Health Awareness",
            "phone": "emergency.phone",
            "email": "1-800-218-2885",
            "address":"no address",
            "description": "emergency.description"  
        });
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

