import CryptoJS from 'crypto-js';
import express from 'express';
import jwt from 'jsonwebtoken';

import User from '../models/User.js';

const router = express.Router();

router.post('/register', async (req, res) => {

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_KEY
    ).toString(),
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username});
    !user && res.status(401).json('Wrong username');

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.PASS_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    originalPassword !== req.body.password &&
      res.status(401).json('Wrong password');

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
        process.env.JWT_KEY,
      { expiresIn: '1d' }
    );

    const { password, ...info } = user._doc;
    res.status(200).json({...info, accessToken});

  } catch (err) {
    res.status(500).json(err);
  };
});

export default router;