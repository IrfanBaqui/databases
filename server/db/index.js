var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
exports.connection = connection = mysql.createConnection({
  host     : 'http://127.0.0.1:3000',
  user     : 'root',
  password : '',
  database: 'chat'
});

exports.createConnection = function() {
  connection.connect()
  // console.log(mysql.get('main'));
};

// connection.query('SELECT room from Main', function(err, rows, fields) {
//   if (err) throw err;
// console.log(exports.connection);
// console.log('The room is: ');

exports.endConnection = function() {
  connection.end()
};
// connection.end();


