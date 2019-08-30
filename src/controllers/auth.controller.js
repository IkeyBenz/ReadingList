const authRouter = require('express').Router();
const User = require('../data/models/user.model');

authRouter.post('/signin', async (req, res) => {

  try {
    const user = await User.findOne({ email: req.body.email }, 'email password');
    const credential = user.generateCredential();
    res.cookie('rl-cred', credential, { maxAge: 1000 * 60 * 60 * 24 * 60 });
    res.redirect('/');
  } catch (e) {
    res.status(400).send(e);
  }
});

authRouter.get('/signout', (req, res) => {
  res.clearCookie();
  res.end();
});

module.exports = authRouter;