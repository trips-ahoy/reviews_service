const { Pool } = require('pg');
const LOGIN = require('./login.js');

const pool = new Pool({
  host: 'localhost',
  post: 3003,
  user: LOGIN.POSTGRES_USER,
  password: LOGIN.POSTGRES_PASSWORD,
  database: 'tripreviews'
});

//query to test that connection is working
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to pg at ', res.rows);
  }
  pool.end();
});

module.exports = pool;