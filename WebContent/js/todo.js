var app=angular.module('MyApp',[]);
app.factory('simpleFactory',function(){
	  var factory={};
	  var message="Hello";
	   var todo_items=[{
	    todo_name : 'a',
	    id : '1',
	    desc: '',
	    completed: false
	  },
	  {
		  todo_name : 'b',
		    id : '2',
		    desc: '',
		    completed: false
	  },
	  {
		  todo_name : 'c',
		    id : '3',
		    desc: '',
		    completed: false
	  },
	  {
		  todo_name : 'd',
		    id : '4',
		    desc: '',
		    completed: false
	  }];
	  factory.getMessage=function(){
	    return message;
	  }
	  factory.getTodo=function(){
	      return todo_items;
	  }
	  return factory;
	})
app.controller('MyController',function($scope,simpleFactory){
	$scope.msg=simpleFactory.getMessage();
	$scope.todos=simpleFactory.getTodo();
});