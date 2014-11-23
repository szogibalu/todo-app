require('./configuration/database').connect(); 
var app = require('./configuration/application').start(8080);
require('./application/services.js')(app);