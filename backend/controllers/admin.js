const mongoose = require("mongoose");
const { ObjectId } = mongoose;
const Teacher = require("../models/teacher");
const Student = require("../models/student");
const get_students = async (req, res) => {
  try {
    const students = await Student.find({}).select(
      "_id username email profile_image "
    );

    res.status(200).json({
      message: students,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

const get_teachers = async (req, res) => {
  try {
    const teachers = await Teacher.find({}).select(
      "_id username email profile_image  isAdmin "
    );

    res.status(200).json({
      message: teachers,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

const delete_student = async (req, res) => {
  try {
    const result = await Student.deleteOne({
      _id: new ObjectId(req.params.id),
    });
    if (result.deletedCount !== 0) {
      res.status(200).json({
        result: "success",
      });
    } else {
      res.status(404).json({
        message: "student not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      result: error,
    });
  }
};

const delete_teacher = async (req, res) => {
  try {
    const result = await Teacher.deleteOne({
      _id: new ObjectId(req.params.id),
    });
    if (result.deletedCount !== 0) {
      res.status(200).json({
        result: "success",
      });
    } else {
      res.status(404).json({
        message: "teacher not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      result: error,
    });
  }
};

const edit_student = async (req, res) => {
  try {
    const data = req.body;
    const result = await Student.updateOne(
      { _id: new ObjectId(req.params.id) },
      data
    );
    if (result.modifiedCount !== 0) {
      res.status(200).json({
        result: "success",
      });
    } else {
      res.status(404).json({
        message: "student not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      result: error,
    });
  }
};

const edit_teacher = async (req, res) => {
  try {
    const data = req.body;
    const result = await Teacher.updateOne(
      { _id: new ObjectId(req.params.id) },
      data
    );
    if (result.modifiedCount !== 0) {
      res.status(200).json({
        result: "success",
      });
    } else {
      res.status(404).json({
        message: "teacher not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      result: error,
    });
  }
};

module.exports = {
  get_students,
  get_teachers,
  delete_student,
  edit_student,
  delete_teacher,
  edit_teacher,
};
