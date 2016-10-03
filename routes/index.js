var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab 4 Web App', test: 'This is my lab 4' });
});

router.get('/first', function(req, res, next) {
  res.render('first', { title: 'Spencer', test: 'I like to program, play video games and hang out with friends. Im boring and basic.'});
});

router.get('/darin', function(req, res, next) {
  res.render('darin', { title: 'Darin', test: 'Darin is retired and likes to read. Not much else.' });
});

router.get('/roxanne', function(req, res, next) {
  res.render('roxanne', { title: 'Roxanne', test: 'Roxanne likes to watch HGTV and read also.' });
});

router.get('/zach', function(req, res, next) {
  res.render('zach', { title: 'Zach', test: 'Zach is learning programming and also likes to hang out with friends.' });
});

module.exports = router;
