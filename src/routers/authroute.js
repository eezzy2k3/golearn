const express = require("express")
const { register,login, getMe, generateToken, resetPassword } = require("../controllers/auth")
const {authorize,access}= require("../middleware/auth")

const router = express.Router()

router.post("/login",login)

router.route("/")
.post(register)
.get(authorize,getMe)

router.post("/generatetoken",generateToken)

router.put("/resetpassword/:resetToken",resetPassword)


module.exports = router