const authRouter = require('express').Router();
const User = require('../data/models/user.model');

authRouter.post('/signin', async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email }, 'email password');
    const passwordMatches = user && await user.comparePassword(req.body.password);
    if (passwordMatches) {
      const credential = user.generateCredential();
      res.cookie('rl-cred', credential, { maxAge: 1000 * 60 * 60 * 24 * 60 });
      return res.redirect('/');
    }
    return res.redirect('/signin/?error=Invalid email or password.');
  } catch (err) {
    next(err);
  }
});

authRouter.get('/signout', (req, res) => {
  res.clearCookie('rl-cred');
  res.end();
});

authRouter.get('/current-user', async (req, res) => {
  return res.json({ user: req.user });
});

module.exports = authRouter;