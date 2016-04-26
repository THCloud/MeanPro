var Bourne = require('bourne');
var crypter = require('../crypt.js');
var db = module.exports = new Bourne('../../config/admin.json');

module.exports.queryAdmin = function(conditions, callback) {
	var query = {
		username: conditions.username,
		password: crypter.hash(password)
	};
	return db.findOne(query, callback);
};
