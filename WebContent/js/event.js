var app=angular.module('MyApp',[]);
app.factory('simpleFactory',function(){
  var factory={};
  var message="Hello";
   var users=[{
    name : 'a',
    id : '1'
  },
  {
    name : 'b',
    id : '2',
  },
  {
    name : 'c',
    id : '3'
  },
  {
    name : 'd',
    id : '4'
  }];
  factory.getMessage=function(){
    return message;
  }
  factory.getUsers=function(){
      return users;
  }
  return factory;
})
app.controller('MyController',function($scope,simpleFactory){
    $scope.value=simpleFactory.getMessage;
    $scope.users=simpleFactory.getUsers();
    $scope.clickFunc=function(item,event){
        console.log("Item clicked : "+item);
        console.log("--------"+event.clientX+" and "+event.clientY+"-------");
    }
})
