const express = require("express");
const { createCourse } = require("../controllers/teacher");
const {login} = require("../controllers/auth")
const auth = require("../middleware/auth");
const isTeacher = require("../middleware/teacher");
const register_teacher = require("../controllers/auth_teacher");
const router = express.Router();

// require auth for all  routes
router.post("/login",login)
// for testing
router.post("/register" ,register_teacher)
router.use(auth);
router.use(isTeacher);

router.post("/", createCourse);

module.exports = router;
