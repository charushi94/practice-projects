var app=angular.module('MyApp',['ngRoute']);
app.factory('myFactory',function(){
	  var factory={};
	  var message="Hello";
	  var users=[{ user_name:'testuser',
		  		user_pass: 'pass123',
		  		email_id:'user@user.com'
		  			}]
	  factory.getMessage=function(){
		    return message;
		  }
	  factory.checkUser = function (user) {
		  var userFound=false;
		  users.forEach(function(a){
			  if(a.user_name==user.user_name && a.user_pass==user.user_pass){
				  console.log('user found'+user.user_name);
				  userFound= true;
			  }
			  else{
				  console.log('not found'+user.user_name);
				  userFound= false;
			  }
		  })
	     return userFound;   	
	   }
	  factory.getTodos=function(user){
          $http({  
              method : 'GET',  
              url : '/todos/:user_name'  
          }).then(function successCallback(response) {  
              $scope.todoList = response.data;  
          }, function errorCallback(response) {  
              console.log(response.statusText);  
          });  
	  }
	   
	  return factory;
});

app.config(function($routeProvider){
	  $routeProvider.when('/login',{
	    //controller : 'MyController',
	    templateUrl : './views/Login.html'
	  }).when('/',{
	    //controller : 'MyController',
	    templateUrl : './views/Login.html'
	  }).when('/todos/:user',{
		  templateUrl: './views/Todos.html',
		  controller: 'TodoController'
	  }).when('/Home',{
	    //controller : 'MyController',
	    templateUrl : './views/Home.html',
	    /*resolve: {
	        "check":function(myFactory){   
	            if(myFactory.checkUser()){}
	            else{
	                $location.path('/login');
	                alert('cannot login');
	            }
	    }}*/
	  }).otherwise({
	    redirectTo : '/login'
	  })
})
app.controller('MyController',function($scope,myFactory,$route, $routeParams, $location){
	$scope.msg=myFactory.getMessage();
	$scope.user=[];
	//$scope.go('statename', {'id': $scope.objectId}); 
	//to allow resolve to access scope variable
	$scope.checkUser=function(user){
		if(myFactory.checkUser(user)){
			console.log('hello');
			$location.url('/Home');
		}
		console.log('controller outside');
	}
	
	//$scope.users=simpleFactory.getTodo();
});
app.controller('TodoController',function($scope,$route,$routeParams,$location,myFactory){
	$scope.user='';
	$scope.getTodo=function(user){
		myFactory.getTodos(user.user_name);
	}
})