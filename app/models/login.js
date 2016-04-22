/**
 *  ./app/models/login.js
 *  @file     relate with login table.
 *            all operations may require model username.
 *
 *  @author   TH_Cloud
 */


var username = require('./username.js');
var crypter = require('crypto');
var mongoose = require('mongoose');
var P = mongoose.Promise = require('bluebird');


var loginSchema = mongoose.Schema({
	username : {
		type: String,
		require: true
	},
	password : {
		type: String,
		require: true
	}
});

var login = module.exports = mongoose.model('login', loginSchema);

/**
 *    conditions is a json, include username:String, password:String
 */
module.exports.addUser = function(conditions, callback) {
	var query = {
		username: conditions.username
	};
	var newUser = {
		username: conditions.username,
		password: crypt(conditions.password)
	};

	// this is first version. callback hell.
    // username.checkExist(query, function(err, count) {
	// 	if (count > 0) {
	// 		return callback(new Error("exist"), null);
	// 	} else {
	// 		username.addUsername(query, function(err, data) {
	// 			if (err) {
	// 				return callback(new Error("failed"), null);
	// 			} 
	// 			login.create(newUser);
	// 			return callback(null, "success");
	// 		})
	// 	}
	// });	

	// second version. mpromise
	// var state = "";
	// username.count(query)
	// 	.then(function(count) {		
	// 		if (count > 0) {
	// 			state = "exist";
	// 			throw new Error();
	// 		} else {
	// 			return username.create(query);
	// 		}
	// 	})
	// 	.then(function(data) {
	// 		return login.create(newUser);
	// 	})
	// 	.then(function(data) {
	// 		return callback(null, "success");
	// 	})
	// 	.catch(function(err) {
	// 		if (state != "exist") {
	// 			state = "failed";
	// 		} 
	// 		return callback(new Error(state));
	// 	});	

	// third version. bluebird
	// needn't catch here, callback will do this.
	return username.count(query)
			.then(count => {
				if (count > 0) {
					return P.reject(new P.OperationalError('exist'));
				} 
				return username.create(query)
						.then(() => login.create(newUser))
						.then(() => "success");
			})
			.nodeify(callback);
};

/**
 *     conditions is a json, include username:String.	
 */
module.exports.deleteUser = function(conditions, callback) {	
	username.remove(conditions)
		.then(() => login.remove(conditions).then(() => 'success'))
		.nodeify(callback);
};

/**
 *  	conditions is a json, include username:String.
 */
module.exports.updatePassword = function(conditions, newPassword, callback) {
	var update = {
		password: crypt(newPassword)
	};
	return callback ?
		login.findOneAndUpdate(conditions, update, null, callback) :
		login.findOneAndUpdate(conditions, update, null).exec();
};

/**
 *  	conditions is a json, include username:String.
 */
module.exports.queryUser = function(conditions, callback) {
	return login.findOne(conditions, callback);
};

function crypt(password) {
	return crypter.createHash('sha256').update(password).digest('hex');
}