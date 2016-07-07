> Description: Learn how to use your first Angular directive: ng-repeat
> Command: `mocha test/exercise_4.js --timeout 5000 --reporter test/log_reporter.js`

### Objectives

After this exercise, you should be able to:

- Define an Angular directive
- Identify the `ng-repeat` Angular directive

## Example

Directives are arguably the most powerful feature of Angular. They modify your page's HTML dynamically — usually based on data from your controller.

A common directive is `ng-repeat`, which we'll use to show a list of tasks instead of just an individual one.

Start by defining an array of tasks on our controller's `$scope`:

```js
myApp = angular.module("myApp", []);

myApp.controller("TaskController", function($scope){
  $scope.tasks = [
    { name: "Do the thing" },
    { name: "Do the other thing" }
  ];
});
```

Our HTML page is currently expecting a single task object. To iterate over each task in the array, we can use `ng-repeat` in the HTML:

```html
<html ng-app="MyApp">
  <body>
    <ul>
      <li ng-repeat="task in tasks">{{ task.name }}</li>
    </ul>
  </body>
</html>
```

The `ng-repeat` directive will iterate over each item in the `tasks` array and pass a local variable named `task` to the list element so that we can render it in our mustache brackets. If we refresh the page, we should see both items rendered in the list.

## Exercise

- Set `$scope.tasks` to an array of task objects
- Use `ng-repeat` in the `<li>` tag to list each task on the page