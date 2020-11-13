const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('../database');

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static('public'));

app.listen(port, () => console.log(`listening on port ${port}`));

app.get('/reviews', function (req, res) {
	// res.send(‘Hello World’)
})
