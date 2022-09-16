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
.post(updateCourse)
.delete(deleteCourse)
.get(getCourse)

router.route("/:id/:contentId")
.delete(deleteCourseContent)
.put(upload.single("coursecontent"),updateCourseContent)

module.exports = router