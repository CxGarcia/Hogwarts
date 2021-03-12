import express from 'express';

const jwt = require('jsonwebtoken');
const secretToken = process.env.SECRET_TOKEN;

function auth(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access denied. No token provided');

  try {
    const decoded = jwt.verify(token, secretToken);
    next();
  } catch (error) {
    res.status(400).send('Invalid token');
  }
}

export default auth;