var models = require('../models/index.js');
var bluebird = require('bluebird');
var express = require('express');
var app = express();

var defaultCorsHeaders = exports.defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

module.exports = {
  messages: {
    get: function (req, res) {
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('in controller message post');

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (message) {
      // console.log('res in user get: ', res);
      // models.users.get(req.body);
    },
    post: function (req, res) {
      console.log('req in user post: ');
      // console.log('res in user post: ', res);
      res.writeHead(200, defaultCorsHeaders);
      models.users.post(req, res);
    }
  }
};

