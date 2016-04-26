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
	statusName: {
		type: Array
	},
	reporters: {
		type: Array
	},
	tag: {
		type: String,
		require: true
	},
	description: {
		type: String
	}
});

var task = module.exports = mongoose.model('task', taskSchema);

model.exports.getTasks = function(callback, limit) {
	return task.find(callback).limit(limit);
};

// conditions include taskName.
model.exports.getTaskInfo = function(conditions, callback) {
	return task.findOne(conditions, callback);
};

model.exports.getTasksByTag = function(conditions, callback, limit) {
	return task.find(conditions, callback).limit(limit);
};

// conditions include _id
model.exports.getTaskInfoById = function(conditions, callback) {
		return task.findById(conditions, callback);
};

// conditions include taskName. updates include total | statusName | tag | description.
model.exports.updateTask = function(conditions, updates, callback) {
	return task.findByIdAndUpdate(conditions, updates, null, callback);
};

// conditions include taskName, updates include username.
model.exports.pushTask = function(conditions, updates, callback) {
	return task.findById(conditions)
				.then(data => {
					var query = {};
					return updateStatus(data, query, updates.username);
				})
				.then(newData => task.findOneAndUpdate(data, newData).exec())
				.then(() => 'success')
				.nodeify(callback);
};

model.exports.deleteTask = function(conditions, callback) {
	return task.remove(conditions, callback);
};

model.exports.deleteTaskById = function(conditions, callback) {
	return task.findByIdAndRemove(conditions, callback);
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


function updateStatus(srcData, desData, reporter) {
	srcData.forEach(function(i) {
		srcData[i] = desData[i];
	});
	desData.reporters.push(reporter);
	desData.current = desData.current + 1;
	if (desData.current === desData.total) {
		desData.state = "finished";
	}
	return desData;
}
