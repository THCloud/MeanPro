var Bourne = require('bourne');
var db = new Bourne('../../config/admin.json');

var query = {
	username: 'TH_Cloud'
};

db.findOne(query, (err, data) => {
	console.log(data);
});
db.find(function(err, data) {
	console.log(data);
});

