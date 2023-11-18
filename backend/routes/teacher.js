const express = require("express");
const { createCourse } = require("../controllers/teacher");

const auth = require("../middleware/auth");
const isTeacher = require("../middleware/teacher");
const router = express.Router();

// require auth for all  routes
router.use(auth);
router.use(isTeacher);

router.post("/", createCourse);

module.exports = router;
