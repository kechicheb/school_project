const express = require("express");
const {
  get_students,
  get_teachers,
  delete_student,
  edit_student,
  delete_teacher,
  edit_teacher,
} = require("../controllers/admin");
const register_student = require("../controllers/auth_student");
const register_teacher = require("../controllers/auth_teacher");
const auth = require("../middleware/auth");
const isAdmin = require("../middleware/admin");
const { login } = require("../controllers/auth");
const router = express.Router();

// require auth for all  routes
router.post("/login", login);

router.use(auth);
router.use(isAdmin);

router.get("/students", get_students);
router.get("/teachers", get_teachers);

router.post("/student", register_student);
router.post("/teacher", register_teacher);

router.delete("/student/:id", delete_student);
router.delete("/teacher/:id", delete_teacher);

router.put("/student/:id", edit_student);
router.put("/teacher/:id", edit_teacher);

module.exports = router;
