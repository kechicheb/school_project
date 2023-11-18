const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const teacherSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profile_image: { type: String, default: "default.jpg" },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);
const Teacher = model("Teacher", teacherSchema);
module.exports = Teacher;
