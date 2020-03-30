const authSecret = process.env.AUTH_SECRET;
const jwt = require("jsonwebtoken");

module.exports = () => {
  const authenticate = (req, res, next) => {
    //By default auth token comes into headers, you can set it here
    const token = req.headers.authorization;

    jwt.verify(token, authSecret, async (err, decoded) => {
      if (err) return res.status(401).send();
      else next();
    });
  };

  return { authenticate };
};
