const express = require('express');
const cors = require('cors');
const matchesRoute = require('./controllers/matchesRoute');

const app = express();

// CORS
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const port = 8080;

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.use('/matches', matchesRoute);

app.listen(port, () => console.log(`Port: ${port}`));
