const express = require('express');
const path = require('path');

const app = express();
const { PORT } = process.env;


// Middleware
app.use(require('cookie-parser')());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Backend Controllers
app.use(require('./controllers/'));

// React Client
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`> Running on 0.0.0.0:${PORT}`);
  require('./data/db');
});

module.exports = app;