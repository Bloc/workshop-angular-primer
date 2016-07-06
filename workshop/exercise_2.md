> Description: Using ng-app to initialize your Angular app.
> Command: `mocha test/exercise_2.js --timeout 5000 --reporter test/log_reporter.js`

### Objectives

After this exercise, you should be able to:

- Define the steps to initialize AngularJS
- Identify the `ng-app` HTML attribute

### Example

AngularJS uses an HTML attribute called `ng-app` to initialize the framework:

```html
<html ng-app="MyApp">
  <body>
  </body>
</html>
```

Once the `ng-app` attribute is added, AngularJS will interpret code within mustache brackets `{{ }}` as JavaScript, and then render the result on the page.

For example:

```html
<html ng-app="MyApp">
  <body>
    <h1>{{ "Hello, World" }}</h1>
  </body>
</html>
```

### Exercise

- Add the `ng-app` attribute
- Add mustache brackets that calculate `5+5` inside of an `<h1>` tag