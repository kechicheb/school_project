const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Student = require("../models/student");
const Teacher = require("../models/teacher");

const login = async (req, res) => {
  try {
    const data = req.body;

    let user;
    if (data.type == "teacher") {
      user = await Teacher.findOne({ email: data.email });
    } else {
      user = await Student.findOne({ email: data.email });
    }

    if (!user)
      return res.status(404).json({
        message: "email does not exist",
      });

    const matched = await bcrypt.compare(data.password, user.password);
    if (!matched)
      return res.status(401).json({
        message: "bad password",
      });

    // @ts-ignore
    delete user.password;

    res.status(200).json({
      user_data: user,
      role: data.type,
      token: generate_token(user, user.id, data.type),
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

const generate_token = (data, id, type) => {
  return jwt.sign(
    {
      _id: id,
      username: data.username,
      email: data.email,
      profile_image: data.profile_image,
      created: Math.floor(Date.now() / 1000),
      type: type,
    },
    "secret",
    { expiresIn: 60 * 60 * 24 * 7 } // 1 week
  );
};

export { generate_token, login };
