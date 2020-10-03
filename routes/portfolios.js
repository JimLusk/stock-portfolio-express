var express = require('express');
var router = express.Router();

var mockjson = require('../data/positions.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //TODO Add handling for dynamic variables
  //TODO Add handling for mock variable id 
  res.json(mockjson);
});

module.exports = router;
