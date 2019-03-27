const express = require('express');
const cors = require('cors');
const apiRoute = require('./controllers/apiRoute');
const uploadRoute = require('./controllers/uploadRoute');
const port = 8080;

const app = express();

// Form Data
const formData = require('express-form-data');
const os = require('os');

const options = {
  uploadDir: os.tmpdir(),
  autoClean: true,
};

app.use(formData.parse(options));
app.use(formData.union());

// CORS
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));


app.get('/', (req, res) => {
  res.send('Home Page');
});

app.use('/api', apiRoute);
app.use('/upload', uploadRoute);

app.listen(port, () => console.log(`Port: ${port}`));
