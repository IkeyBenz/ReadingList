const router = require('express').Router();
const { checkAuth } = require('./middleware');

router.use(checkAuth);
router.use('/users', require('./user.controller'));
router.use('/auth', require('./auth.controller'));
router.use('/books', require('./book.controller'));

router.use((error, req, res, next) => {
  if (error) {
    res.json(error);
  }
  next();
});

module.exports = router;