var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});
router.get('/time', function(req, res, next) {
  res.send([2017,4,1]);
});

module.exports = router;
