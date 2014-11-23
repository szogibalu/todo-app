var Todo = require('./model/todo');

function getTodos(res){
	Todo.find(function(err, todos) {
			if (err)
				res.send(err)
			res.json(todos); 
		});
};

module.exports = function(app) {	
	app.get('/api/todos', function(req, res) {
		console.log("Listing TODOs");
		getTodos(res);
	});

	app.post('/api/todos', function(req, res) {
		console.log("Creating a TODO");
		Todo.create({
			text : req.body.text,
			done : false
		}, function(err, todo) {
			if (err)
				res.send(err);			
			getTodos(res);
		});
	});
	
	app.delete('/api/todos/:todo_id', function(req, res) {
		console.log("Deleting TODO");
		Todo.remove({
			_id : req.params.todo_id
		}, function(err, todo) {
			if (err)
				res.send(err);
			getTodos(res);
		});
	});
	
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); 
	});
};