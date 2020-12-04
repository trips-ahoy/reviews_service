const { Pool } = require('pg');
const LOGIN = require('./login.js');

const pool = new Pool({
  host: 'localhost',
  post: 3003,
  user: LOGIN.POSTGRES_USER,
  password: LOGIN.POSTGRES_PASSWORD,
  database: 'tripreviews'
});

// pool.query('select * from listings', (err, res) => {
//   console.log(res.rows);
//   pool.end();
// });

module.exports = pool;