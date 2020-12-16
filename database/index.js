const { Pool } = require('pg');
// const LOGIN = require('./login.js');

// const pool = new Pool({
//   host: LOGIN.HOST,
//   port: LOGIN.PORT,
//   user: LOGIN.USER,
//   password: LOGIN.PASSWORD,
//   database: 'tripreviews'
// });

const pool = new Pool({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: 'tripreviews'
});

//query to test that connection is working
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to pg at ', res.rows);
  }
});

module.exports = pool;