const request =require("supertest");
const app = require("../../app");
const database= require("../../database/database_connection")


describe("Get /users/ journal entries", () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI1OGExMWFkYWMwZTg0ZTJmOWMzNjkiLCJpYXQiOjE2NDY2MjczNDd9.QTmiOD47B0-0ZIMol4Yz5BYf7hTh0t0-cN0GunUdZEs"
   
    test("should respond with a 200 status code", async () => {
        const response = await request(app).get("/users/getJournalEntries").set("auth-token", token);
        //checking if there is a response or not
        expect(response.statusCode).toBe(200);
    })

    
    test("should respond with a 200 status code", async () => {
        const response = await request(app).post("/users/addJournalEntry").set("auth-token", token).send({
            //generating dummy emergency data
                "type": "travel",
                "title": "happy",
                "entry": "just graduated!"    
        });
        //checking if there is a response or not
        expect(response.statusCode).toBe(200);
    })



    afterAll( () => {
        database.close();
     });
        
});

