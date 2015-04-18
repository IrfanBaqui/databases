/* You'll need to have MySQL running and your Node server running
 * for these tests to pass. */

var mysql = require('mysql');
var request = require("request"); // You might need to npm install the request module!
var expect = require('../../node_modules/chai/chai').expect;

describe("Persistent Node Chat Server", function() {
  var dbConnection;

  beforeEach(function(done) {
    dbConnection = mysql.createConnection({
      user: "root",
      password: "",
      database: "chat"
    });
    dbConnection.connect(function(e) {if (e) console.log("test err");});

    var tablename = "User"; // TODO: fill this out

    /* Empty the db table before each test so that multiple tests
     * (or repeated runs of the tests) won't screw each other up: */
    dbConnection.query("truncate " + tablename, done);
  });

  afterEach(function() {
    dbConnection.end();
  });

  it("Should insert posted messages to the DB", function(done) {
    // Post the user to the chat server.
    request({ method: "POST",
              uri: "http://127.0.0.1:3000/classes/users",
              json: { username: "Valjean" }
    }, function () {
      // Post a message to the node chat server:
      request({ method: "POST",
              uri: "http://127.0.0.1:3000/classes/messages",
              json: {
                username: "Valjean",
                message: "In mercy's name, three days is all I need.",
                roomname: "Hello"
              }
      }, function () {

        var queryString = "SELECT * FROM User";
        var queryArgs = [];

        dbConnection.query(queryString, queryArgs, function(err, results) {
          console.log('in test ', "queryString: ", queryString);
          console.log('in test ', "queryArgs: ", queryArgs);
          // Should have one result:
          expect(results.length).to.equal(1);

          // TODO: If you don't have a column named text, change this test.
          expect(results[0].text).to.equal("Valjean");
          // expect(results[0].text).to.equal("In mercy's name, three days is all I need.");

          done();
        });
      });
    });
  });

//   it("Should output all messages from the DB", function(done) {
//     // Let's insert a message into the db
//        var queryString = "";
//        var queryArgs = [];
//     // TODO - The exact query string and query args to use
//     // here depend on the schema you design, so I'll leave
//     // them up to you. */

//     dbConnection.query(queryString, queryArgs, function(err) {
//       if (err) { throw err; }

//       // Now query the Node chat server and see if it returns
//       // the message we just inserted:
//       request("http://127.0.0.1:3000/classes/messages", function(error, response, body) {
//         var messageLog = JSON.parse(body);
//         expect(messageLog[0].text).to.equal("Men like you can never change!");
//         expect(messageLog[0].roomname).to.equal("main");
//         done();
//       });
//     });
//   });
});
