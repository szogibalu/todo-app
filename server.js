var express  = require('express');
var app      = express(); 								
var mongoose = require('mongoose'); 					
var port  	 = 8080; 				
		
var morgan   = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(express.static(__dirname + '/client/app')); 		
app.use(morgan('dev')); /
app.use(bodyParser.urlencoded({'extended':'true'})); 
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride('X-HTTP-Method-Override')); 

require('./configuration/database').connect(); 	
require('./application/services.js')(app);

app.listen(port);
console.log("Application started and listening on port " + port);
