const bcrypt = require("bcrypt");

const Teacher = require("../models/teacher");
const { generate_token } = require("./auth");

const register = async (req, res) => {
  try {
    const data = req.body;

    let teacher = await Teacher.findOne({ email: data.email });
    if (teacher)
      return res.status(401).json({
        message: "email taken",
      });

    const hash_password = await bcrypt.hash(data.password, 10);
    teacher = new Teacher({
      username: data.username,
      email: data.email,
      password: hash_password,
      profile_image: data.profile_image,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    await teacher.save();

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
