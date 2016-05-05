/**
 *	./test/server/models/test-login.js
 *  @file     check the mongoose CRUD.
 *
 *  @author   TH_Cloud
 *
 */


var mongoose = require('mongoose');
var path = require('path');
var should = require('chai').should();

var conf = require('../../conf.js');
var login = require(path.join(conf.models, 'login.js'));
var username = require(path.join(conf.models, 'username.js'));
var db = require(path.join(conf.config, 'db-config.js'));


describe('Model-Login', function () {

	before(function () {
		mongoose.connect(db.url);
		mongoose.connection;
	});

	// for the method addUser
	describe('#addUser()', function () {
		before(function (done) {
			login.addUser({
				username: "Fenrisulfr",
				password: "123"
			}, (err, data) => {
				done();
			});
		});

		after(function (done) {
			done();
		});

		it('should have an object when find by name="Fenrisulfr"', function (done) {
			login.findOne({ username:"Fenrisulfr" }, function (err, data) {
				if (err) {
					console.log(err);
					return;
				}
				data.should.be.an.Object;
				data.should.have.property('username').equal("Fenrisulfr");
				done();
			});
		});

		it('should have an object in model username when find by name="Fenrisulfr"', function (done) {
			username.findOne({ username:"Fenrisulfr" }, function (err, data) {
				if (err) {
					console.log(err);
					return;
				}
				data.should.be.an.Object;
				data.should.have.property('username').equal("Fenrisulfr");
				done();
			});			
		});
	});

	// for the method updatePassword
	describe('#updatePassword()', function () {
		before(function (done) {
			done();
		});
		after(function (done) {
			done();
		});
		
		it('should have an object when update password by name', function (done) {
			login.updatePassword({ username: "Fenrisulfr" }, "456", function (err, data) {
					if (err) {
						console.log(err);
						return;
					}
					data.should.be.an.Object;
					data.should.have.property('username').equal("Fenrisulfr");
					done();
				});
		});
	});

	// for the method queryUser
	describe('#queryUser()', function () {

		before(function (done) {
			done();
		});
		after(function (done) {
			done();
		});

		it('should have an object when query by name and password', function (done) {
			var conditions = {
				username: "Fenrisulfr",
				password: "456"
			};
			login.queryUser(conditions, function (err, data) {
				if (err) {
					console.log(err);
					return;
				}
				data.should.be.an.Object;
				data.should.have.property('username').equal("Fenrisulfr");
				done();
			});
		});
	});

	// for the method deleteUser
	describe('#deleteUser()', function () {
		before(function (done) {
			login.deleteUser({ username: "Fenrisulfr" }, (err, data) => {
				done();
			});
		});
		after(function (done) {
			done();
		});

		it('should have no object when find by name="Fenrisulfr"', function (done) {
			login.findOne({ username: "Fenrisulfr" }, function (err, data) {
				if (err) {
					console.log(err);
					return;
				}
				should.not.exist(data);
				done();
			});
		});

		it('should have no object in username when find by name="Fenrisulfr"', function (done) {
			username.findOne({ username: "Fenrisulfr" }, function (err, data) {
				if (err) {
					console.log(err);
					return;
				}
				should.not.exist(data);
				done();
			});
		});
	});
});