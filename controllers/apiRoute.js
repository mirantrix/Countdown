const express = require('express');
const fs = require('fs');

const api = express.Router();

api.get('/matches', (req, res) => {
  fs.readFile('./apiSimulator/matches.json', (err, data) => {
    if (err) res.send('ERROR: ', err);
    res.json(JSON.parse(data));
  });
});

api.get('/inputData', (req, res) => {

  let response = [];

  fs.readFile('./apiSimulator/meses.json', (err, data) => {
    if (err) res.send('ERROR: ', err);
    response.push(JSON.parse(data));
  });
  fs.readFile('./apiSimulator/dias.json', (err, data) => {
    if (err) res.send('ERROR: ', err);
    response.push(JSON.parse(data));
  });
  fs.readFile('./apiSimulator/dates.json', (err, data) => {
    if (err) res.send('ERROR: ', err);
    response.push(JSON.parse(data));
    res.json(response);
  });
});

module.exports = api;
