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
var db = require(path.join(conf.config, 'db-config.js'));


describe('Model-Tag', function () {

	before(function () {
		mongoose.connect(db.url);
		mongoose.connection;
	});

	after(function () {
		tag.remove({ tagName: "tag1" }, null);
	});

	// for the method addUser
	describe('#addTag()', function () {
		before(function () {
			tag.addTag({ tagName: "tag1" }, null);
		});

		after(function () {});

		it('should have a tag name="tag1"', function () {
			tag.find({ tagName:"tag1" }, function (err, data) {
				if (err) {
					console.log(err);
					return;
				}
				data.should.be.an.Object();
				data.tagName.should.equal("tag1");
			});
		});
	});

	// for the method getTags
	describe('#getTags()', function () {
		it('should get tag name="tag1"', function () {
			tag.getTags(function (err, data) {
					if (err) {
						console.log(err);
						return;
					}
					data.should.be.an.Object();
					data.tagName.should.equal("tag1");
				});
		});
	});
});