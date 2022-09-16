const express = require("express")
const { register,login, getMe } = require("../controllers/auth")
const {authorize,access}= require("../middleware/auth")

const router = express.Router()

router.post("/login",login)

router.route("/")
.post(register)
.get(authorize,getMe)


module.exports = router