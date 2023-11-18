const mongoose = require("mongoose");

const Teacher = require("../models/teacher")
const isAdmin = async (req, res, next) => {
  const teacher = await Teacher.findOne({
    _id: new mongoose.ObjectId(res.locals.user_data._id),
  });
  if (!teacher) {
    return res.status(404).json({
      message: "user not found",
    });
  } else {
    if (teacher.isAdmin) {
      next();
    } else {
      return res.status(401).json({
        message: "un authorized",
      });
    }
  }
};


module.exports = {isAdmin};
