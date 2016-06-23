# Angular Controllers

> Description: Set up your first Angular controller
> Command: `mocha test/exercise_3.js --timeout 5000 --reporter test/log_reporter.js`

Usually we won't be interpreting just basic arithmetic in the HTML, but actual JavaScript objects containing data. Let's interpret a single task from our todo list with:

```
<html ng-app="MyApp">
  <body>
    <ul>
      <li>{{ task.name }}</li>
    </ul>
  </body>
</html>
```


We haven't defined what `task` is yet though, so if you reload the page we'll just see an empty list. To define objects that can be used inside of our mustache brackets, we need to set up an Angular controller. Start by defining the controller in the HTML:

```
<html ng-app="MyApp">
  <body>
    <ul>
      <li>{{ task.name }}</li>
    </ul>
  </body>
</html>
```

Then in our `application.js` file, we start with initialization:

```
myApp = angular.module("myApp", []);

myApp.controller("TaskController", function($scope) {

});
```

The `angular.module` call returns an object for our entire Angular `myApp` app. We're using that object to define our first controller on the next line. In the callback being passed to `myApp.controller`, Angular passes a `$scope` object that we can use to define objects and functions that are accessible from the HTML. We need to define a `task` object so that its name is rendered in the HTML:

```
myApp = angular.module("myApp", []);

myApp.controller("TaskController", function($scope) {
  $scope.task = { name: "Do the thing" }
});
```

When we refresh the page, we should see the task name rendered.
