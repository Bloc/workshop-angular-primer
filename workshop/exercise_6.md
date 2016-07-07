> Description: Using ng-model and ng-click to create new tasks.
> Command: `mocha test/exercise_6.js --timeout 5000 --reporter test/log_reporter.js`

### Objectives

After this exercise, you should be able to:

- Compare the `ngModel`, `ngClick`, and `ngRepeat` directives
- Build a simple web app using those three directives

### Example

To create new tasks, we'll use `ng-model` to "bind" our input field to an object in our controller. This "binding" is two-way: whatever text the user types is "bound" to a JavaScript object. Similarly, if we change the value in code, the text in the text field will get updated.

We can set up `ng-model` with:

```html
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
```

In this case, we're calling our JavaScript object `newTask.name`. So when the user types something, our code can see what they typed there.

Create an empty JavaScript object (`{}`) in the controller so the code has an object to modify:

```js
myApp = angular.module("myApp", []);

myApp.controller("TaskController", function($scope){
  $scope.newTask = {};

  $scope.tasks = [
    { name: "Do the thing" },
    { name: "Do the other thing" }
  ];
})
```

When the user clicks "Submit", we need to add `newTask` to the `tasks` array. To respond to the click, we use the `ngClick` directive:

```html
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
```

The `ng-click` attribute tells Angular to call the `addTask` function, passing our `newTask` object to it.

Implement the `addTask` function in our controller:

```js
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
```

In `addTask`, we add the new task to `tasks` and reset the `newTask` object to empty the input field.

If you reload the page, you can add new tasks that dynamically appear in the list.

### Exercise

In the controller…

- Initialize an empty object called `newTask` on the scope
- Add the `addTask` function to the scope

In your HTML…

- Add the `ng-model` attribute to bind the text input field to `newTask.name`
- Add the `ng-click` attribute so the submit button calls the `addTask` function

Congratulations! You now have an interactive, dynamic todo list web app.