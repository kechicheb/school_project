const bcrypt = require("bcrypt");

const Student = require("../models/student");
const { generate_token } = require("./auth");

const register = async (req, res) => {
  try {
    const data = req.body;

    let student = await Student.findOne({ email: data.email });
    if (student)
      return res.status(401).json({
        message: "email taken",
      });

    const hash_password = await bcrypt.hash(data.password, 10);
    student = new Student({
      username: data.username,
      email: data.email,
      password: hash_password,
      profile_image: data.profile_image,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    await student.save();

    res.status(201).json({
      message: "account created",
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

module.exports= { register };
