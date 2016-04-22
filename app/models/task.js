/**
 *  ./app/models/login.js
 *  @file    relate with task table.
 *
 *  @author  TH_Cloud
 */

var mongoose = require('mongoose');
var P = mongoose.Promise = require('bluebird');

var taskSchema = mongoose.Schema({
	taskName: {
		type: String,
		require: true
	},
	total: {
		type: Number,
		min: 2,
		max: 5,
		require: true
	},
	current: {
		type: Number,
		require: true
	},
	state: {
		type: String,
		enum: ['finished', 'unfinished'],
		require: true
	},
	stateName: {
		type: Array
	},
	reporters: {
		type: Array
	}
});

var task = module.exports = mongoose.model('task', taskSchema);

model.exports.getTasks = function(callback, limit) {
	return task.find(callback).limit(limit);
};

model.exports.getTaskInfo = function(conditions, callback) {
	return task.findOne(conditions, callback);
};

model.exports.updateTask = function(conditions, updates, callback) {
	return task.findOneAndUpdate(conditions, updates, null, callback);
};

model.exports.deleteTask = function(conditions, callback) {
	return task.remove(conditions, callback);
};

model.exports.addTask = function(conditions, callback) {
	var query = {
		taskName: conditions.taskName
	};

	return task.count(query)
			.then(count => {
				if (count > 0) {
					return P.reject(new P.Operational('exist'));
				}
				return task.create(conditions).then(() => "success");
			})
			.nodeify(callback);
};








