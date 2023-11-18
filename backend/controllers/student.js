const Course = require("../models/course");

get_courses = async (req, res) => {
  try {
    const courses = await Course.find({}).select("courseName description ");

    res.status(200).json({
      message: courses,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
module.exports = get_courses;
