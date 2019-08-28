/**
 * The user controller is responsible for handling all requests made to
 * the /users endpoint. All routes in this controller are forwarded from /users,
 * so for example router.post('/') in this file, is really handling a post request
 * to '/users/'.
 */
const User = require('../data/models/user.model');
const userRouter = require('express').Router();

userRouter.post('/', async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.end();
});

module.exports = userRouter;

