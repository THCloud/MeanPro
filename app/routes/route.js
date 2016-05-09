/**
 *  ./app/routes/route.js
 *
 *	@file    Include the static page route.
 *
 *  @author  TH_Cloud
 *
 */


var express = require('express');
var router = express.Router();

router
	.get('/main', function (req, res, next) {
		res.render('index.jade');
	})	
	.get('/user/edit', function (req, res, next) {
		res.render('userEdit.jade');
	})
	.get('/user/edit/:id', function (req, res, next) {
		res.redner('userEdit.jade');
	})
	.get('/about', function (req, res, next) {
		res.render('about.jade');
	})
	.get('/logout', function (req, res, next) {
		req.session.username = null;
		req.session.userRole = null;
		res.json({ state: 'success' });
	});
	// .get('/error', function (req, res, next) {
	// 	res.render('error.jade');
	// });


module.exports = router;