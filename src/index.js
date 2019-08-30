const express = require('express');
const path = require('path');

const app = express();
const { PORT } = process.env;

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('cookie-parser')());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require('./controllers/'));

app.listen(PORT, () => {
  console.log(`> Running on ${PORT}`);
  require('./data/db');
});

module.exports = app;