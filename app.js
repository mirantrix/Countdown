const express = require('express');
const app = express();
const port = 8080;
  
app.set('view engine', 'pug');

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {title: 'Hello World', message: 'Hello World'});
});

app.listen(port, () => console.log(`Port: ${port}`));
