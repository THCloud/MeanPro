var Bourne = require('bourne');
var crypter = require('crypto');
var db = new Bourne('../../config/admin.json');
var express = require('express');
var router = express.Router();



router
	.get('/admin', function(req, res) {

	})
	.post('/admin', function(req, res) {
		var query = {
			username: req.body.username,
			password: crypt(req.body.password)
		};

		db.findOne(query, (err, data) => {
			if (data) {
				req.session.user = query.username;
				res.redirect('');
			}
		});
	});

module.exports = router;

function crypt(password) {
	return crypter.createHash('sha256').update(password).digest('hex');
}