const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profile_image: { type: String, default: "default.jpg" },
  },
  { timestamps: true }
);

const Student =mongoose.model("Student", studentSchema);
module.exports = Student;

