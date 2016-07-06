> Description: Set up your first Angular controller
> Command: `mocha test/exercise_3.js --timeout 5000 --reporter test/log_reporter.js`

Although AngularJS can interpret arithmetic in HTML, it's typically used to display JavaScript objects containing data.

### Objectives

After this exercise, you should be able to:

- Explain what mustache brackets (`{{ }}`) do in AngularJS
- Describe how to print a JavaScript object using AngularJS
- Identify code that creates an AngularJS controller
- Describe how `$scope` can be used to transfer information from an AngularJS controller to an HTML page

### Example

Let's interpret a single task from our todo list:

```html
<html ng-app="MyApp">
  <body>
    <ul>
      <li>{{ task.name }}</li>
    </ul>
  </body>
</html>
```

We haven't defined `task` yet, so if you reload the page we'll just see an empty list. To define objects that can be used inside of our mustache brackets, we need to set up an AngularJS controller. Since we named the app `MyApp` in the HTML, we can initialize a controller of the same name in `application.js`:

```js
myApp = angular.module("myApp", []);

myApp.controller("TaskController", function($scope) {

});
```

The `angular.module` call returns an object for our entire Angular `myApp` app. We're using that object to define our first controller on the next line.

Angular passes a `$scope` object to the callback we passed to `myApp.controller()`. We use that `$scope` object to specify which objects and functions are accessible from the HTML.

In this case, we need to define a `task` object so that its name is rendered in the HTML:

```
myApp = angular.module("myApp", []);

myApp.controller("TaskController", function($scope) {
  $scope.task = { name: "Do the thing" }
});
```

When we refresh the page, we see the task name rendered.

### Exercise

- Render `task.name` in an unordered list within `index.html`
- Create a `TaskController`
- Within the `TaskController`, create one `task` object with a `name`