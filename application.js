app = angular.module('Tasks', []);

app.controller("TaskController", function($scope) {
  $scope.newTask = null;
  $scope.tasks   = [
    { name: "Do the thing" },
    { name: "Do another thing" }
  ];

  $scope.createTask = function(task) {
    $scope.tasks.push(task);
    $scope.newTask = null;
  };
});
