const jwt = require('jsonwebtoken');
const { secretToken } = require('../config/db.config');

function auth (req, res, next) {

  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access denied. No token provided');

  try {
    const decoded = jwt.verify(token, secretToken);
    console.log("DECODED FROM MIDDLEWARE", decoded);
    next();
  } catch (error) {
    res.status(400).send('Invalid token');
  }
}

module.exports = auth;