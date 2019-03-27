const express = require('express');
const upload = express.Router();

upload.post('/', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

module.exports = upload;
