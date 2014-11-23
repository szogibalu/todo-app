var mongoose = require('mongoose');
var url = 'mongodb://node:node@localhost:27017/todo';
module.exports = {	
	connect : function() {		
		mongoose.connect(url);
		console.log("Connected to: " + url)
	}
}