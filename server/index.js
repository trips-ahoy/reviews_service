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

  // here's what values looks like:
  // [
  //   '1',
  //   'English',
  //   'families,couples,solo,business,friends',
  //   'Mar-May,Jun-Aug,Sep-Nov,Dec-Feb',
  //   '1,2,3,4,5'
  // ]

  // how to separate into array form if in exp won't take array?


app.get('/api/listings/:listing_id/reviews/filtered/', function (req, res) {

  let sql = 'SELECT reviews.*, users.id AS user_id, users.name AS user_name, users.address AS user_address, users.contributions AS user_contributions, users.votes AS user_votes, users.avatar AS user_avatar, users.followers AS user_followers FROM reviews, users WHERE reviews.listing_id = $1 AND reviews.user_id = users.id ';
 
  let values = [req.params.listing_id];

  // keep track of what number param we are on
  // start at 1 (for listing_id)
  var paramSubNum = 1;

  // helper function to add each filter to sql query by creating IN() and populating with paramSubNums / populating values array to match
  const addFilterToQuery = (filterItems, filterName) => {
    var filterStr = `AND reviews.${filterName} IN(`;
    filterItems.forEach((item, i) => {
      values.push(item);
      filterStr += (`$${paramSubNum + 1}`);
      if (i != filterItems.length - 1) {
        filterStr += ',';
      }
      paramSubNum++;
    });
    filterStr += ') ';
    sql += filterStr;
  };

  // create reviews.language in()
  var langs = req.query.lang.split(',');
  addFilterToQuery(langs, 'language');
  
  // create reviews.travel_type in()
  var travelTypes = req.query.travel.split(',');
  addFilterToQuery(travelTypes, 'travel_type');

  // create reviews.season in()
  var seasons = req.query.season.split(',');
  addFilterToQuery(seasons, 'season');

  // create reviews.rating in()
  var ratings = req.query.rating.split(',');
  addFilterToQuery(ratings, 'rating');

  sql += ';'

  console.log(sql);
  console.log(values);

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


