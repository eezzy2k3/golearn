const express = require("express")
const getAllUsers = require("../controllers/user")

const {authorize,access}= require("../middleware/auth")


const router = express.Router()

router.use(authorize,access("admin"))


router.get("/",getAllUsers)

module.exports = router