/**
 *	./test/server/models/test-login.js
 *  @file     check the mongoose CRUD.
 *
 *  @author   TH_Cloud
 *
 */


var mongoose = require('mongoose');
var path = require('path');
var should = require('chai').should;

var conf = require('../../conf.js');
var login = require(path.join(conf.models, 'login.js'));
var username = require(path.join(conf.models, 'username.js'));
var db = require(path.join(conf.config, 'db-config.js'));


describe('Model-Login', function () {

	before(function () {
		mongoose.connect(db.url);
		mongoose.connection;
	});

	after(function () {});

	// for the method addUser
	describe('#addUser()', function () {
		before(function () {
			login.addUser({
				username: "TH_Cloud",
				password: "123"
			}, null);
		});

		after(function () {});

		it('should have an object when find by name="TH_Cloud"', function () {
			login.find({ username:"TH_Cloud" }, function (err, user) {
				if (err) {
					console.log(err);
					return;
				}
				user.should.be.an.Object();
				user.username.should.equal("TH_Cloud");
			});
		});

		it('should have an object in model username when find by name="TH_Cloud"', function () {
			username.find({ username:"TH_Cloud" }, function (err, user) {
				if (err) {
					console.log(err);
					return;
				}
				user.should.be.an.Object();
				user.username.should.equal("TH_Cloud");
			});			
		});
	});

	// for the method updatePassword
	describe('#updatePassword()', function () {
		it('should have an object when update password by name', function () {
			login.updatePassword({ username: "TH_Cloud" }, "456", function (err, data) {
					if (err) {
						console.log(err);
						return;
					}
					data.should.be.an.Object();
					data.username.should.equal("TH_Cloud");
				});
		});
	});

	// for the method queryUser
	describe('#queryUser()', function () {
		it('should have an object when query by name and password', function () {
			var conditions = {
				username: "TH_Cloud",
				password: "456"
			};
			login.queryUser(conditions, function (err, data) {
				if (err) {
					console.log(err);
					return;
				}
				data.should.be.an.Object();
				data.username.should.equal("TH_Cloud");
			});
		});
	});

	// for the method deleteUser
	describe('#deleteUser()', function () {
		before(function () {
			login.deleteUser({ username: "TH_Cloud" });
		});

		it('should have no object when find by name="TH_Cloud"', function () {
			login.find({ username: "TH_Cloud" }, function (err, data) {
				if (err) {
					console.log(err);
					return;
				}
				data.should.not.exist();
			});
		});

		it('should have no object in username when find by name="TH_Cloud"', function () {
			username.find({ username: "TH_Cloud" }, function (err, data) {
				if (err) {
					console.log(err);
					return;
				}
				data.should.not.exist();
			});
		});
	});
});