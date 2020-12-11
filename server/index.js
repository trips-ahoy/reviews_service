const express = require('express');
const app = express();
const port = 3003;
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const db = require('../database/index.js');
const pool = require('../database/postgres_index.js');

app.use(bodyParser.json());
app.use(morgan('dev'));


app.use('/:listing_id', express.static('public'));

app.listen(port, () => console.log(`listening on port ${port}`));

app.get('/api/listings/:listing_id/reviews', function (req, res) {

  let values = [req.params.listing_id];

  let sql = 'SELECT reviews.*, users.id AS user_id, users.name AS user_name, users.address AS user_address, users.contributions AS user_contributions, users.votes AS user_votes, users.avatar AS user_avatar, users.followers AS user_followers FROM reviews, users WHERE reviews.listing_id = $1 AND reviews.user_id = users.id';

  pool.query(sql, values, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(data.rows);
    }
  });

})


app.get('/api/listings/:listing_id/reviews/:languages/:travel/:rating/:season', function (req, res) {

  let sql = 'SELECT reviews.*, users.id AS user_id, users.name AS user_name, users.address AS user_address, users.contributions AS user_contributions, users.votes AS user_votes, users.avatar AS user_avatar, users.followers AS user_followers FROM reviews, users WHERE reviews.listing_id = $1 AND reviews.user_id = users.id AND reviews.language in($2) AND reviews.travel_type in($3) AND reviews.season in($4) AND reviews.rating in($5)';
 
  let values = [req.params.listing_id, req.params.language, req.params.travel, req.params.season, req.params.rating]

  pool.query(sql, values, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(data.rows);
    }
  });

})



// app.get('/api/listings/:listing_id/reviews/user/:id', function (req, res) {

//   var id = [req.params.id];
//   console.log('look here',id)

// 	const sql = `SELECT * FROM users WHERE id = ?`;

//   db.query(sql, id, (err, data) => {
//     if (err) {
//       console.log('Error fetching user info:' , err);
//       res.send(500);
//     } else {
//       res.send(data);
//     }
//   })

// })


