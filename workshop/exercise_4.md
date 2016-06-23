# Angular Directives: ng-repeat

> Description: Learn how to use your first Angular directive: ng-repeat
> Command: `mocha test/exercise_4.js --timeout 5000 --reporter ./test/log_formatter.js`

Directives are arguably the most powerful feature of Angular. Directives are a way of extending HTML dynamically, and Angular comes with a few directives built in. A common one is `ng-repeat`, which we'll use to show a list of tasks instead of just an individual one.

We'll start by defining a list of tasks on our controller's `$scope`:

    myApp = angular.module("myApp", []);

    myApp.controller("TaskController", function($scope){
      $scope.tasks = [
        { name: "Do the thing" },
        { name: "Do the other thing" }
      ];
    });

Our view is currently expecting a single task object. To iterate over each task in the array, we can use `ng-repeat` in the HTML:

    <html ng-app="MyApp">
      <body>
        <ul>
          <li ng-repeat="task in tasks">{{ task.name }}</li>
        </ul>
      </body>
    </html>

The `ng-repeat` directive will iterate over each item in the `tasks` array and pass a local variable named `task` to the list element so that we can render it in our mustache brackets. If we refresh the page, we should see both items rendered in the list.
