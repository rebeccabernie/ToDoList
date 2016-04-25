angular.module('starter.controllers', [])

.controller('AddCtrl', function($scope, Task) {
    
    $scope.data = {
        title: "", details: ""
    };
    
    $scope.addTask = function(){
      
        Task.addTask($scope.data.title, $scope.data.details);
            $scope.data.title = "";
            $scope.data.details = "";   
    };
})


.controller('UpcomingCtrl', function($scope, Task) {
    $scope.data = "";
         $scope.complete = function(i){
            Task.complete(i);
        };
             
    $scope.removeAll = function(){
    Task.removeAll();
    };
    
    $scope.tasks = Task.data.tasks;
    $scope.show;
})