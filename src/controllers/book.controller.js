const bookRouter = require('express').Router();

bookRouter.post('/', async (req, res, next) => {
  req.user.books.unshift(req.body.book);
  await req.user.save();
  res.end();
});

module.exports = bookRouter;