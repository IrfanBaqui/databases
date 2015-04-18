var controllers = require('./controllers');
var router = require('express').Router();

for (var route in controllers) {
  router.route("/" + route).get(controllers[route].get);
  router.route("/" + route).post(controllers[route].post);
}

module.exports = router;

