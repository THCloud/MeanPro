/**
 *   ./app/models/tag.js
 *   @file      related with tag model.
 *				some operations may require task model.
 *
 *   @author    TH_Cloud
 */

var mongoose = require('mongoose');
var P = mongoose.Promise = require('bluebird');
var task = require('./task.js');

var tagSchema = {
	tagName: {
		type: String,
		require: true
	}
};

var tag = module.exports = mongoose.model('tag', tagSchema);

module.exports.addTag = function(conditions, callback) {
	return tag.create(conditions, callback);
};

model.exports.getTags = function(callback) {
	return tag.find(callback);
}

module.exports.deleteTag = function(conditions, callback) {
	return task.deleteTask(conditions)
				.then(() => tag.remove(conditions))
				.then(() => 'success')
				.nodeify(callback);
};

module.exports.deleteTagById = function(conditions, callback) {
		return tag.findById(conditions)
		      .then((data) => task.deleteTask({ tagName: data.tagName }))
					.then(() => tag.findByIdAndRemove(conditions))
					.then(() => 'success')
					.nodeify(callback);
};

module.exports.updateTag = function(conditions, updates, callback) {
	return task.updateTask(conditions, updates)
				.then(() => tag.findByIdAndUpdate(conditions, updates).exec())
				.then(() => 'success')
				.nodeify(callback);
};

module.exports.updateTagById = function(conditions, updates, callback) {
	return tag.findById(conditions)
				.then((data) => task.updateTask({tagName: data.tagName}, updates))
				.then(() => tag.findByIdAndUpdate(conditions, updates).exec())
				.then(() => 'success')
				.nodeify(callback);
};
