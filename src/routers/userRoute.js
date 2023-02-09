const express = require("express")
const subscribe = require("../controllers/subscription")
const {getAllUsers, allPublishers} = require("../controllers/user")

const {authorize,access}= require("../middleware/auth")


const router = express.Router()

router.get("/publishers",allPublishers)

router.post("/subscribe",authorize,subscribe)


router.use(authorize,access("admin"))


router.get("/",getAllUsers)

module.exports = router