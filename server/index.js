const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('../database');

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/:listing_id', express.static('public'));

app.listen(port, () => console.log(`listening on port ${port}`));


app.get('/api/listings/:listing_id/reviews', function (req, res) {

  const id = req.params.listing_id;

	const sql = `SELECT * FROM reviews WHERE listing_id = ?`;

  db.query(sql, id, (err, data) => {
    if (err) {
      console.log('Error fetching reviews', err);
      res.send(500);
    } else {
      res.send(data);
    }
  })

})

app.get('/api/listings/:listing_id/reviews/user/:id', function (req, res) {

  var id = [req.params.id];
  console.log('look here',id)

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


