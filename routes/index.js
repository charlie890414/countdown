var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/time', function(req, res, next) {
  res.send('2017/04/01');
});

module.exports = router;
