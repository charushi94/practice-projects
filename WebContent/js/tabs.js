var app=angular.module('tabDemo',[]);
app.controller('tabCtrl',function($scope){
$scope.counter=1;
$scope.tabs=[{
    id:0,
    content:'This is the default tab on load'
}];


$scope.addTab=function(){
    $scope.counter++;
    $scope.tabs.push({id:$scope.counter,content:'Any content'})
}

$scope.deleteTab=function(index){
    console.log('delete tab');
    console.log(index);
    $scope.tabs.splice(index,1);
}



})
