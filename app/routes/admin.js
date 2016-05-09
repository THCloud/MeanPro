/**
 *  ./app/routes/admin.js
 *
 *  @file     Include the admin RESTFUL.
 *
 *  @author   TH_Cloud
 *
 */

var express = require('express');
var admin = require('../models/admin.js');
var login = require('../models/login.js');
var session = require('express-session');
var sessionConf = require('../../config/session-config.js');
var router = express.Router();

router
	.use(session(sessionConf))
	.get('/', function (req, res, next) {
		console.log("do render the jade");
		res.render('admin.jade');
	})

	// check the admin for login.
	// req.body include username and password
	.post('/', function (req, res, next) {
		var query = req.body;
		admin.queryAdmin(query, (err, data) => {
			if (err) {
				res.json({ errInfo: 'query admin failed' });
			} else if (data) {
				req.session.username = query.username;
				req.session.userRole = 'admin';
				res.json({ state: 'success' });
			} else {
				res.json({ errInfo: 'admin auth failed' });
			}
		});
	})

	// for admin add a normal user.
	// req.body include username and password.
	.put('/add', function (req, res, next) {
		if (req.session.userRole != 'admin') {
			res.json({ errInfo: 'wrong userRole.' });
		} else {
			var newUser = req.body;
			login.addUser(newUser, (err, data) => {
				var result = {};
				if (err) {
					result.errInfo = err.cause == 'exist' ?
						'username already exist.' :
						'admin add user failed.';
				} else {
					result.state = 'success';
				}
				res.json(result);
			});
		}
	});
 
module.exports = router;	

