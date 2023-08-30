require("dotenv").config()

const express = require("express")

const app = express()

const cookieparser = require("cookie-parser")

const connectDb = require("./config/config")
const errorHandler = require("./src/middleware/errorHandler")

const courseRouter = require("./src/routers/courseRouter")

const authRouter = require("./src/routers/authroute")

const reviewRouter = require("./src/routers/reviewRoute")

const cartRouter = require("./src/routers/cartRoute")

const oredrRouter = require("./src/routers/orderRouter")

const userRouter = require("./src/routers/userRoute")


const mongoSanitize = require('express-mongo-sanitize')

const helmet = require("helmet")

const xss = require("xss-clean")

const rateLimit = require('express-rate-limit')

const hpp = require("hpp")

const cors = require("cors")

// accept body data in json format
app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(cookieparser())

connectDb()


// sanitize data
app.use(mongoSanitize())

// set security headers
app.use(helmet())

// prevent xss attack
app.use(xss())

// set rate limit
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 150, // Limit each IP to 150 requests per `window` (here, per 15 minutes)
})

// Apply the rate limiting middleware to all requests nh
app.use(limiter)

// allow cors
app.use(cors())

app.use(hpp())

app.use("/api/v1/course",courseRouter)
app.use("/api/v1/auth",authRouter)
app.use("/api/v1/reviews",reviewRouter)
app.use("/api/v1/cart",cartRouter)
app.use("/api/v1/order",oredrRouter)
app.use("/api/v1/user",userRouter)



app.use(errorHandler)

let port = process.env.PORT
if(port == null || port == ""){
    port = 5000
}

const server = app.listen(port,()=>{
    console.log(`app is listening on ${port}`)
})



module.exports = {app,server}