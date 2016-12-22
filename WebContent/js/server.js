var express = require('express');
var router=express.Router();
var bodyParser=require('body-parser');
var app = new express();
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/test');
//mongoose.createConnection('mongodb://localhost:27017/test');
var todo=require('./model/todo');
app.use(express.static(__dirname + '/public'));
app.use('/todo', todo );

var item5=new todo({
	name : '5',
	description:'item5',
	completed:false
});





router.get('/todo/:user_name',function(request,response,next){
	todo.find({'user_name':req.params.user_name},function(err,todo){
		if(err){return next(err);}
		response.json(todo);
	})
})







app.listen(8100, function() {
  console.log('listening on 8100')
})





