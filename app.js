const express = require('express');
const matchesRoute = require('./controllers/matchesRoute');

const app = express();
const port = 8080;

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Hello World', message: 'Hello World' });
});

app.use('/matches', matchesRoute);

app.listen(port, () => console.log(`Port: ${port}`));
