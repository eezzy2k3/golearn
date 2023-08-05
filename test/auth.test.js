require("dotenv").config()
const supertest = require("supertest")
const {server,app} = require("../app")
const mongoose = require("mongoose")

describe("sign up",()=>{
    beforeAll(async()=>{
        await mongoose.connect(process.env.MONGO_URL)
    })

    afterAll(async()=>{
        await server.close()
        await mongoose.connection.close()
    })

    // afterEach(async()=>{
    //     await mongoose.Collection()
    // })

    it("should sign up a user",async()=>{
        const request = await supertest(app)
        .post("/api/v1/auth")
        .send({
          firstName: "israel" ,
          lastName: "Gbose",
          userName:"ssssssssee",
          password: "1234567",
          role: "user",
          phoneNumber: "09864783930",
          email:"testaaaaddddddfdddd@yahoo.com"

        })
        expect(request.status).toBe(200)
    })
})