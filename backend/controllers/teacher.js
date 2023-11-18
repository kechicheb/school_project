const Course = require("../models/course");
const { ObjectId } = require("mongodb");

const createCourse = async (req, res) => {
  try {
    const { courseName, description } = req.body;

    // Creating a new course
    const newCourse = new Course({
      courseName,
      description,
      createdBy: new ObjectId(res.locals.user_data._id), // Assuming user id is stored in req.user.userId after token verification
    });

    await newCourse.save();
    res.status(201).send("Course created successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports = { createCourse };
