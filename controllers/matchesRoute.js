const express = require('express');
const matches = express.Router();


matches.get('/', (req, res) => {
  res.render('matches/index');
});


matches.route('/create')
  .get((req, res) => {
    res.render('matches/create');
  });

module.exports = matches
