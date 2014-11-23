var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
	'extended' : 'true'
}));
app.use(bodyParser.json());
app.use(bodyParser.json({
	type : 'application/vnd.api+json'
}));
app.use(methodOverride());

module.exports = {
	start : function(port) {
		app.listen(port);
		console.log("Application started and listening on port " + port);
		return app;
	}
}