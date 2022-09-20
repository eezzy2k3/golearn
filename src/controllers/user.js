const User = require("../models/UserModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const sendMail = require("../utils/sendMail")
const ErrorResponse = require("../utils/errorResponse")
const asyncHandler = require("../middleware/asyncHandler")


const getAllUsers = asyncHandler(async(req,res,next)=>{

    const users = await User.find()

    res.status(200).json({success:true,count:users.length,data:users})
})

module.exports = getAllUsers