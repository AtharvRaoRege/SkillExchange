var express = require('express');
var router = express.Router();
require('../config/mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hello');
});

module.exports = router;
