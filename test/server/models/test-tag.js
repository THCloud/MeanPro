/**
 *	./test/server/models/test-tag.js
 *  @file     check the mongoose CRUD.
 *
 *  @author   TH_Cloud
 *
 */


var mongoose = require('mongoose');
var path = require('path');
var should = require('chai').should();

var conf = require('../../conf.js');
var tag = require(path.join(conf.models, 'tag.js'));
var task = require(path.join(conf.models, 'task.js'));
var db = require(path.join(conf.config, 'db-config.js'));


describe('Model-Tag', function () {

	before(function () {
		mongoose.connect(db.url);
		mongoose.connection;
	});

	// for the method getTags
	describe('#getTags()', function () {
		before(function (done) {
			done();
		});
		after(function (done) {
			done();
		});


		it('should get an array of tags, length of 3', function (done) {
			tag.getTags(function (err, data) {
				if (err) {
					console.log(err);
					return;
				}
				data.should.be.an.Array;
				data.should.have.length(3);
				done();
			});
		});
	});


	// for the method addUser
	describe('#addTag()', function () {
		before(function (done) {
			tag.addTag({ tagName: "tag6" }, (err, data) => {
				done();
			});
		});
		after(function (done) {
			done();
		});

		it('should have a tag name="tag6"', function (done) {
			tag.findOne({ tagName:"tag6" }, function (err, data) {
				if (err) {
					console.log(err);
					return;
				}
				data.should.be.an.Object;
				data.should.have.property('tagName').equal("tag6");
				done();
			});
		});
	});

	// for the method updateTag
	describe('#updateTag()', function () {
		before(function (done) {
			tag.updateTag({ tagName: "tag3" }, { tagName: "tag5" }, (err, data) => {
				done();
			});
		});
		after(function (done) {
			done();
		});

		it('should have a tag name="tag5" after updated', function (done) {
			tag.findOne({ tagName:"tag5" }, function (err, data) {
				if (err) {
					console.log(err);
					return;
				}
				data.should.be.an.Object;
				data.should.have.property('tagName').equal("tag5");
				done();
			});
		});

		it('should have no tag name="tag3" after updated', function (done) {
			tag.findOne({ tagName:"tag3" }, function (err, data) {
				if (err) {
					console.log(err);
					return;
				}
				should.not.exist(data);
				done();
			});
		});

		it('should have no task belong to tag="tag3"', function (done) {
			task.find({ tagName:"tag3" }, function (err, data) {
				if (err) {
					console.log(err);
					return;
				}
				data.should.be.an.Array;
				data.should.have.length(0);
				done();
			});
		});

		it('should have 4 tasks belong to tag="tag5"', function (done) {
			task.find({ tagName:"tag5" }, function (err, data) {
				if (err) {
					console.log(err);
					return;
				}
				data.should.be.an.Array;
				data.should.have.length(4);
				done();
			});
		});
	});

	// for the method deleteTag
	describe('#deleteTag()', function () {
		before(function (done) {
			tag.deleteTag({ tagName: "tag5" }, (err, data) => {
				done();
			});
		});
		after(function (done) {
			done();
		});

		it('should have no tag name="tag5" after deleted', function (done) {
			tag.findOne({ tagName:"tag5" }, function (err, data) {
				if (err) {
					console.log(err);
					return;
				}
				should.not.exist(data);
				done();
			});
		});

		it('should have no task belong to tag="tag5" after deleted', function (done) {
			task.find({ tagName:"tag5" }, function (err, data) {
				if (err) {
					console.log(err);
					return;
				}
				data.should.be.an.Array;
				data.should.have.length(0);
				done();
			});
		});
	});
	
});