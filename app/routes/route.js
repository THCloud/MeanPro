var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	console.log('success !');
	res.render('index.jade');
});


router.get('/state1', function (req, res, next) {
	console.log('render the error page');
	res.render('error.jade');
});

module.exports = router;