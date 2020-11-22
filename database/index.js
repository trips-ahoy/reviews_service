//import in mysql
const mysql = require('mysql');
const password = require('./database.config.js')

//set up connection parameters
const connection = mysql.createConnection({
 hostname: 'localhost',
 user: 'student1',
 password: password,
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

