//import in mysql
const mysql = require('mysql');

//set up connection parameters
const connection = mysql.createConnection({
 hostname: 'localhost',
 user: 'student',
 password: 'student1',
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

