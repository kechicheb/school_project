const jwt = require("jsonwebtoken");

const requireAuth = async (req, res, next) => {
  // verify user is authenticated

  if (!req.get("X-Authorization")) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  const token = req.get("X-Authorization");

  try {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err === null) {
        res.locals.user_data = decoded;
        next();
      } else {
        return res.status(401).json({
          message: "invalid token",
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = requireAuth;
