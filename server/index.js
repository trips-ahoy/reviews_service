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

	const sql = `SELECT * FROM reviews`;

  db.query(sql, (err, data) => {
    if (err) {
      console.log('Error fetching reviews', err);
      res.send(500);
    } else {
      res.send(data);
    }
  })

})

app.get('/user/:id', function (req, res) {

	var id = [req.params.id];

	const sql = `SELECT * FROM users WHERE id = ?`;

  db.query(sql, id, (err, data) => {
    if (err) {
      console.log('Error fetching user info:' , err);
      res.send(500);
    } else {
      res.send(data);
    }
  })

})


