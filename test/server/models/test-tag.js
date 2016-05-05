/**
 *	./test/server/models/test-tag.js
 *  @file     check the mongoose CRUD.
 *            ONLY addTag & getTags !!!
 *
 *  @author   TH_Cloud
 *
 */


var mongoose = require('mongoose');
var path = require('path');
var should = require('chai').should;

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
		it('should get an array of tags, length of 3', function () {
			tag.getTags(function (err, data) {
				if (err) {
					console.log(err);
					return;
				}
				data.should.be.an.Array();
				data.should.have.length(3);
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

		it('should have a tag name="tag6"', function () {
			tag.find({ tagName:"tag6" }, function (err, data) {
				if (err) {
					console.log(err);
					return;
				}
				data.should.be.an.Object();
				data.tagName.should.equal("tag6");
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

		it('should have a tag name="tag5" after updated', function () {
			tag.find({ tagName:"tag5" }, function (err, data) {
				if (err) {
					console.log(err);
					return;
				}
				data.should.be.an.Object();
				data.tagName.should.equal("tag5");
			});
		});

		it('should have no tag name="tag3" after updated', function () {
			tag.find({ tagName:"tag3" }, function (err, data) {
				if (err) {
					console.log(err);
					return;
				}
				data.should.not.exist();
			});
		});

		it('should have no task belong to tag="tag3"', function () {
			task.find({ tagName:"tag3" }, function (err, data) {
				if (err) {
					console.log(err);
					return;
				}
				data.should.not.exist();
			});
		});

		it('should have 4 tasks belong to tag="tag5"', function () {
			task.find({ tagName:"tag5" }, function (err, data) {
				if (err) {
					console.log(err);
					return;
				}
				data.should.be.an.Array();
				data.should.have.length(4);
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

		it('should have no tag name="tag5" after deleted', function () {
			tag.find({ tagName:"tag5" }, function (err, data) {
				if (err) {
					console.log(err);
					return;
				}
				data.should.not.exist();
			});
		});

		it('should have no task belong to tag="tag5" after deleted', function () {
			task.find({ tagName:"tag5" }, function (err, data) {
				if (err) {
					console.log(err);
					return;
				}
				data.should.not.exist();
			});
		});
	});
	
});