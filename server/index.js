const express = require('express');
const app = express();
const port = 3003;
const morgan = require('morgan');
const pool = require('../database/index.js');

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

});

app.get('/api/listings/:listing_id/reviews/filtered', function (req, res) {

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
  addFilterToQuery(req.query.lang, 'language');
  
  // create reviews.travel_type in()
  addFilterToQuery(req.query.travel, 'travel_type');

  // create reviews.season in()
  addFilterToQuery(req.query.season, 'season');

  // create reviews.rating in()
  addFilterToQuery(req.query.rating, 'rating');

  sql += ';'

  pool.query(sql, values, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(data.rows);
    }
  });

});
