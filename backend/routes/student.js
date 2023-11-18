const express = require("express");
const { get_courses } = require("../controllers/student");

const auth = require("../middleware/auth");
const isStudent = require("../middleware/student");
const router = express.Router();

// require auth for all  routes
router.use(auth);
router.use(isStudent);

router.get("/", get_courses);

module.exports = router;
