var app = angular.module('MyApp', []);
app.factory('myFactory', function () {
    var factory = {};
    this.msg='Welcome ';
    factory.getMessage=function(){
    	return this.msg;
    }

    return factory;
});
/*app.config(function($routeProvider){
  $routeProvider.when('/',{
    //controller : 'MyController',
    templateUrl : './index.html'
  }).when('/commonpage',{
    //controller : 'MyController',
    templateUrl : './views/commonpage.html'
  }).when('/secretpage',{
    //controller : 'MyController',
    templateUrl : './views/secretpage.html',
    resolve: {
        "check":function(myFactory,$location){   
            if(myFactory.checkPermission()){}
            else{
                $location.path('/resolve');
                alert('cannot access');
            }
    }}
  }).otherwise({
    redirectTo : '/'
  });
});*/


app.controller('MyController', function ($scope, myFactory) {
    $scope.msg1 = 'Hello World';
    $scope.factMsg = function(){
    	return myFactory.getMessage();
    }
});
