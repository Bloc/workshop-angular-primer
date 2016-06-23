# Creating New Tasks with ng-model and ng-click

> Description: Using ng-model and ng-click to create new tasks.
> Command: `mocha test/exercise_6.js --timeout 5000 --reporter test/log_reporter.js`

To create new tasks, we'll use `ng-model` to bind our input field to an object in our controller. We can set up `ng-model` with:

    <html ng-app="MyApp">
      <body>

        <label>New Task</label>
        <input type="text" ng-model="newTask.name"></input>
        <input type="submit" class="button"></input>

        <ul>
          <li ng-repeat="task in tasks">{{ task.name }}</li>
        </ul>
      </body>
    </html>

And in our controller we add:

    myApp = angular.module("myApp", []);

    myApp.controller("TaskController", function($scope){
      $scope.newTask = {};

      $scope.tasks = [
        { name: "Do the thing" },
        { name: "Do the other thing" }
      ];
    })

`ng-model` works by two-way binding the input value with our `newTask` object. This means if we enter an input value, it will change the value of the JavaScript object and vice versa. To add a new task when the user clicks "Submit", we use `ng-click`:

    <html ng-app="MyApp">
      <body>

        <label>New Task</label>
        <input type="text" ng-model="newTask.name"></input>
        <input type="submit" class="button" ng-click="addTask(newTask)"></input>

        <ul>
          <li ng-repeat="task in tasks">{{ task.name }}</li>
        </ul>
      </body>
    </html>

The `ng-click` attribute tells Angular to run a `addTask` function and pass our `newTask` object to it. Now we need to implement the `addTask` function in our controller:

    myApp = angular.module("myApp", []);

    myApp.controller("TaskController", function($scope){
      $scope.newTask = {};

      $scope.tasks = [
        { name: "Do the thing" },
        { name: "Do the other thing" }
      ];

      $scope.addTask = function(task) {
        $scope.tasks.push(task);
        $scope.newTask = {};
      };
    })

In our `addTask` function, we're adding the new task to our `tasks` array and resetting the `newTask` object to empty out the input field. If you reload the page, you should be able to add new tasks that dynamically appear in the list.
