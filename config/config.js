const mongoose = require("mongoose")


const connectDb = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    console.log("DB connected")
}

module.exports = connectDb






// 63c133d8d7515a41f17bba31