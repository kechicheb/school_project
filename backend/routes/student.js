const express = require("express");
const { get_courses } = require("../controllers/student");
const {login} = require("../controllers/auth")
const auth = require("../middleware/auth");
const isStudent = require("../middleware/student");
const register_student = require("../controllers/auth_student");
const router = express.Router();

// require auth for all  routes
router.post("/login",login)

// for testing
router.post("/register" ,register_student)
router.use(auth);
router.use(isStudent);

router.get("/", get_courses);

module.exports = router;
