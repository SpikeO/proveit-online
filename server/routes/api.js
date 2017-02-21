import express from 'express';
import config from 'config';
import jwt from 'jsonwebtoken';
import User from '../schemas/User';

const router = new express.Router();

router.get('/user', async(req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) { return res.status(401).end(); }
    const userId = decoded.sub;
    return User.findById(userId, (userErr, user) => {
      if (userErr || !user) {
        return res.status(401).end();
      }
      return res.status(200).json(user);
    });
  });
});

module.exports = router;