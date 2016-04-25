angular.module('starter.controllers', [])

//Add Controller
.controller('AddCtrl', function($scope, Task) {
    
    //Blank
    $scope.data = {
        title: "", details: ""
    };
    
    //User Input
    $scope.addTask = function(){
      
        Task.addTask($scope.data.title, $scope.data.details);
            $scope.data.title = "";
            $scope.data.details = "";   
    };
})

//Upcoming Controller
.controller('UpcomingCtrl', function($scope, Task) {
    
    $scope.data = "";
    
    //Complete Task
    $scope.complete = function(i){
        Task.complete(i);
    };
    
    //Remove All
    $scope.removeAll = function(){
    Task.removeAll();
    };
    
    $scope.tasks = Task.data.tasks;
    
})