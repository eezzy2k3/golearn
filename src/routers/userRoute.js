const express = require("express")
const {getAllUsers, allPublishers} = require("../controllers/user")

const {authorize,access}= require("../middleware/auth")


const router = express.Router()

router.get("/publishers",allPublishers)


router.use(authorize,access("admin"))


router.get("/",getAllUsers)

module.exports = router