//import in mysql
const mysql = require('mysql');

const LOGIN = require('./login.js');

//set up connection parameters
const connection = mysql.createConnection({
 hostname: 'localhost',
 user: LOGIN.MYSQL_USER,
 password: LOGIN.MYSQL_PASSWORD,
 database: 'reviewsMod'
});

//must specifically invoke connection:
connection.connect(err => {
 if (err) {
   console.log(err);
 } else {
   console.log('Connected to MySql :)')
 }
});
//export out connection for use
module.exports = connection;

