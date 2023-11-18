const isStudent = async (req, res, next) => {
  if (res.locals.user_data.type === "student") {
    next();
  } else {
    return res.status(401).json({
      message: "un authorized",
    });
  }
};

module.exports = {isStudent};
