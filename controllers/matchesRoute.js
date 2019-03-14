const express = require('express');
const fs = require('fs');

const matches = express.Router();

matches.get('/', (req, res) => {
  fs.readFile('./apiSimulator/matches.json', (err, data) => {
    if (err) res.send('ERROR: ', err);
    res.json(JSON.parse(data));
  });
});

matches.route('/create').get((req, res) => {
  res.render('matches/create');
});

module.exports = matches;
