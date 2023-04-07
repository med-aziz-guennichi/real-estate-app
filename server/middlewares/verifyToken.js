const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  if (!req.headers.authorization)
    return res.status(403).json({ mssg: "You dont have the token" });
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
      if (err) return res.status(403).json({ mssg: "Wrong Token" });
      else {
        req.user = data;
        next();
      }
    });
  }
};

module.exports = verifyToken;
