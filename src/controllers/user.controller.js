/**
 * The user controller is responsible for handling all requests made to
 * the /users endpoint. All routes in this controller are forwarded from /users,
 * so for example router.post('/') in this file, is really handling a post request
 * to '/users/'.
 */
const User = require('../data/models/user.model');
const userRouter = require('express').Router();

/** CREATE new user */
userRouter.post('/', async (req, res) => {
  await (new User(req.body)).save();
  res.end();
});

/** READ current user */

/** UPDATE current user */

/** DELETE current user */


module.exports = userRouter;

