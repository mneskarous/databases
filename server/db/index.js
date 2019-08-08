var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  // password: "student",
  database: "chat"
});

connect.connect(function(err){
  if (err){
    console.log('ERROR: ', err);
  }
  console.log('CONNECTED!');
});

module.exports.connect = connect;
