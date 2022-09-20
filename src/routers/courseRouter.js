const {craeteCourse,uploadCourseContent, updateCourse, deleteCourse, deleteCourseContent, getCourse, updateCourseContent, getAllcourses} = require("../controllers/courseController")
const express = require("express")
const {authorize,access}= require("../middleware/auth")
const upload = require("../utils/upload")


const router = express.Router()
const reviewRouter =require("./reviewRoute")
router.use("/:courseId/reviews",reviewRouter)

router.route("/")
.post(authorize,access("publisher","admin"),craeteCourse)
.get(getAllcourses)

router.post("/uploadcontent/:id",authorize,access("publisher","admin"),upload.single("coursecontent"),uploadCourseContent)

router.route("/:id")
.put(authorize,access("publisher","admin"),updateCourse)
.delete(authorize,access("publisher","admin"),deleteCourse)
.get(getCourse)

router.route("/:id/:contentId")
.delete(authorize,access("publisher","admin"),deleteCourseContent)
.put(authorize,access("publisher","admin"),upload.single("coursecontent"),updateCourseContent)

module.exports = router