var models = require('../models/index.js');
var bluebird = require('bluebird');
var express = require('express');
var app = express();


module.exports = {
  messages: {
    get: function (req, res) {
      console.log('in controller message get');
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('in controller message post');

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('req in user get: ', req.body);
      // console.log('res in user get: ', res);
      models.users.get(req.body);
    },
    post: function (req, res) {
      console.log('req in user post: ', req.body);
      // console.log('res in user post: ', res);
      models.users.post(req.body);
    }
  }
};

