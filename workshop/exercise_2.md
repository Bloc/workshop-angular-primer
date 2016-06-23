# Initializing Angular

> Description: Using ng-app to initialize your Angular app.
> Command: `mocha test/exercise_2.js --timeout 5000 --reporter test/log_reporter.js`

Angular uses an HTML attribute called `ng-app` to initialize the framework:

  <html ng-app="MyApp">
    <body>
    </body>
  </html>

Initialize the app and test to see if Angular is interpreting our code. If we add mustache brackets `{{ }}` in our HTML, Angular will interpret the contents with JavaScript and print the result. Add mustache brackets that calculate `5+5` inside of an `<h1>` tag:

  <html ng-app="MyApp">
    <body>
      <h1>{{ 5 + 5 }}</h1>
    </body>
  </html
