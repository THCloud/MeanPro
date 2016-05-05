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
	.get('/', function (req, res, next) {
		res.render('index.jade');
	})
	.get('/error', function (req, res, next) {
		res.render('error.jade');
	})
	.get('/taskInfo', function (req, res, next) {
		res.render('taskInfo.jade');
	})		
	.get('/about', function (req, res, next) {
		res.render('about.jade');
	})
	.get('/logout', function (req, res, next) {
		req.session.username = null;
		req.session.userRole = null;
		res.json({ state: 'success' });
	});


module.exports = router;