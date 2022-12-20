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

const allPublishers = asyncHandler(async (req,res,next)=>{
    const { page = 1, limit = 10 } = req.query
   
    const publishers = await User.find({role:"publisher"})
            .sort("CreatedAt")
			.limit(limit * 1)
			.skip((page - 1) * limit)
			.exec()

            res.status(200).json({success:true,count:publishers.length,data:publishers})

})

module.exports = {getAllUsers,allPublishers}