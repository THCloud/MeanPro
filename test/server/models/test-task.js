/**
 *	./test/server/models/test-task.js
 *  @file     check the mongoose CRUD.
 *
 *  @author   TH_Cloud
 *
 */


var mongoose = require('mongoose');
var path = require('path');
var should = require('chai').should();

var conf = require('../../conf.js');
var task = require(path.join(conf.models, 'task.js'));
var db = require(path.join(conf.config, 'db-config.js'));


describe('Model-Task', function () {

	before(function () {
		mongoose.connect(db.url);
		mongoose.connection;
	});

	// for the method getTasks
	describe('#getTasks()', function () {
		before(function (done) {
			done();
		});

		after(function (done) {
			done();
		});

		it('should have an array of tasks with length 10 when limited 10', function (done) {
			task.getTasks(function (err, data) {
				if (err) {
					console.log(err);
					return;
				}
				data.should.be.an.Array;
				data.should.have.length(10);
				done();
			}, 10);
		});
	});

	// for the method getTaskInfo
	describe('#getTaskInfo()', function () {
		before(function (done) {
			done();
		});
		after(function (done) {
			done();
		});
		
		it('should have an object when query task taskName="task1"', function (done) {
			task.getTaskInfo({ taskName: "task1" }, function (err, data) {
					if (err) {
						console.log(err);
						return;
					}
					data.should.be.an.Object;
					data.should.have.property('taskName').equal("task1");
					done();
				});
		});
	});

	// for the method getTasksByTag
	describe('#getTasksByTag()', function () {
		before(function (done) {
			done();
		});
		after(function (done) {
			done();
		});

		it('should have an array with length 4 when query task tagName="tag1"', function (done) {
			task.getTasksByTag({ tagName: 'tag1' }, function (err, data) {
				if (err) {
					console.log(err);
					return;
				}
				data.should.be.an.Array;
				data.should.have.length(4);
				done();
			}, 4);
		});
	});

	// for the method addTask
	describe('#addTask()', function () {
		before(function (done) {
			var conditions = {
				taskName: "testTask",
				total: "5",
				current: "5",
				state: "unfinished",
				statusName: ['status1', 'status2', 'status3', 'status4', 'status5'],
				reporters: ['user1', 'user2', 'user3', 'user4'],
				tagName: 'tag2',
				description: 'no description'
			};
			task.addTask(conditions, (err, data) => {
				done();
			});
		});
		after(function (done) {
			done();
		});

		it('should have an object when find by taskName="testTask"', function (done) {
			task.findOne({ taskName: "testTask" }, function (err, data) {
				if (err) {
					console.log(err);
					return;
				}
				data.should.be.an.Object;
				data.should.have.property('taskName').equal('testTask');
				done();
			});
		});
	});

	// for the method pushTask
	describe('#pushTask()', function () {
		before(function (done) {
			var updates = { username: "user5" };
			var query = { taskName: "testTask" };
			task.pushTask(query, updates, (err, data) => {
				done();
			});
		});
		after(function (done) {
			done();
		});

		it('should have an object when find by taskName="testTask" and finished.', function (done) {
			task.findOne({ taskName: "testTask" }, function (err, data) {
				if (err) {
					console.log(err);
					return;
				}
				data.should.be.an.Object;
				data.should.have.property('reporters').with.length(5);
				data.should.have.property('state').equal('finished');
				done();
			});
		});
	});

	// for the method deleteTask
	describe('#deleteTask()', function () {
		before(function (done) {
			task.deleteTask({ taskName: "testTask" }, function (err, data) {
				done();
			});
		});

		it('should have no task named testTask after deleted.', function (done) {
			task.findOne({ taskName: "testTask" }, function (err, data) {
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