const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const User = require('../models/userModel.js');

const userRouter = express.Router();

userRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const createUser = await user.save();
    res.send({
      _id: createUser._id,
      name: createUser.name,
      email: createUser.email,
    });
  })
);

module.exports = userRouter;
