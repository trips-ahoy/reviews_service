const express = require('express');
const app = express();
const port = 3003;
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


app.get('/api/listings/:listing_id/reviews/:languages/:travel/:rating/:season', function (req, res) {

  const id = req.params.listing_id;
  const lang = req.params.languages.split(" ");
  const travel = req.params.travel.split(" ");
  const rating = req.params.rating.split(" ");
  const season = req.params.season.split(" ");


  let sql = `SELECT * FROM reviews WHERE listing_id = ?`
  let items = [id]

  //add languages to sql string
  if (lang[0] !== 'none') {
    let langStr = ` AND (`
    for (let i=0; i < lang.length; i++) {
      items.push(lang[i])
      if (lang.length === 1) {
        langStr = ' AND language = ? '
      } else {
        langStr = langStr+ 'language = ? OR '
      }
    }
    if (lang.length === 1) {
      var langFinal = langStr
    } else {
      var langFinal = langStr.substring(0, langStr.length-4) + ')'
    }
    sql = sql + langFinal
  }

  //add travel type to sql string
  if (travel[0] !== 'none') {
    let travelStr = ` AND (`
    for (let i=0; i < travel.length; i++) {
      items.push(travel[i])
      if (travel.length === 1) {
        travelStr = ' AND travel_type = ? '
      } else {
        travelStr = travelStr+ 'travel_type = ? OR '
      }
    }
    if (travel.length === 1) {
      var travelFinal = travelStr
    } else {
      var travelFinal = travelStr.substring(0, travelStr.length-4) + ')'
    }
    sql = sql + travelFinal
  }

  //add rating to sql string
  if (rating[0] !== 'none') {
    let ratingStr = ` AND (`
    for (let i=0; i < rating.length; i++) {
      items.push(rating[i])
      if (rating.length === 1) {
        ratingStr = ' AND rating = ? '
      } else {
        ratingStr = ratingStr+ 'rating = ? OR '
      }
    }
    if (rating.length === 1) {
      var ratingFinal = ratingStr
    } else {
      var ratingFinal = ratingStr.substring(0, ratingStr.length-4) + ')'
    }
    sql = sql + ratingFinal
  }

  //add season to sql string
  if (season[0] !== 'none') {
    let seasonStr = ` AND (`
    for (let i=0; i < season.length; i++) {
      items.push(season[i])
      if (season.length === 1) {
        seasonStr = ' AND season = ? '
      } else {
        seasonStr = seasonStr+ 'season = ? OR '
      }
    }
    if (season.length === 1) {
      var seasonFinal = seasonStr
    } else {
      var seasonFinal = seasonStr.substring(0, seasonStr.length-4) + ')'
    }
    sql = sql + seasonFinal
  }

  db.query(sql, items, (err, data) => {
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


