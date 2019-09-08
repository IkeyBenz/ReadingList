const jwt = require('jsonwebtoken');
const User = require('../data/models/user.model');

/** Checks if the request contains rl-cred in its cookies.
 * If it does, the _id from the jwt will be used to find
 * the authenticated user, which is assigned to req.user. */
const checkAuth = async (req, _, next) => {
  const cookie = req.cookies && req.cookies['rl-cred'];
  if (!cookie) return next();
  req.user = await User.findByJWT(cookie);
  console.log("Got here");
  return next();
}

module.exports = {
  checkAuth
}