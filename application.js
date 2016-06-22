app = angular.module('Tasks', []);
app.controller("TaskController", function($scope) {
  $scope.newTask = null;
  $scope.tasks   = [];
  
  $scope.createTask = function(task) {
    $scope.tasks.push(task);
    $scope.newTask = null;
  };
});
