var mongoose = require('mongoose');

// create schema first
var demoSchema = mongoose.Schema({
    text: {
      type: String,
      require: true
    },
    images: {
      type: Array
    },
    num: {
      type: Number,
      min: 18,
      max: 120
    },
    city: {
      type: String,
      enum: ['beijing', 'shanghai']
    }
});

// Model is like table in db.
var demoModel = module.exports = mongoose.model('demoModel', demoSchema);

// find all collection and limit with limit. then do the cb.
module.exports.get = function(cb, limit) {
  demoModel.find(cb).limit(limit);
};

module.exports.getSingle = function(id, cb) {
  demoModel.findById(id, cb);
};

module.exports.add = function(tmp, cb) {
  demoModel.create(tmp, cb);
};

module.exports.update = function(id, tmp, options, cb) {
  var query = {_id: id};
  var update = {
    text: tmp.text,
    images: tmp.images
  };
  demoModel.findOneAndUpdate(query, update, options, cb);
};

module.exports.remove = function(id, cb) {
  var query = {_id: id};
  demoModel.remove(query, cb);
};
