var mysql = require('mysql');
var db = require('../db/index.js');


module.exports = {
  messages: {

    get: function() {

    },

    post: function (res, req) {

      var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database: 'chat'
      });

      console.log("in post");

      connection.connect(function(err) { if (err) console.log('err');});
      //start here
      var queryString = "INSERT INTO Main Select (userName) VALUES (" + "'" + message.username + "'" + ")";
      var queryArgs = [];

      connection.query(queryString, queryArgs, function(err, results) {

      });
    }
  },

  users: {
    get: function (param) {


    },
    post: function (message) {

      var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database: 'chat'
      });

      console.log("in post");
      connection.connect(function(err) { if (err) console.log('err');});

      var queryString = "INSERT INTO User (userName) VALUES (" + "'" + message.username + "'" + ")";
      var queryArgs = [];
      connection.query(queryString, queryArgs, function(err, results) {
          console.log('in post ', "queryString: ", queryString);
          console.log('in post ', "queryArgs: ", queryArgs);
      });
    }
  }
};

