# Inputs for New Tasks

> Description: ng-model and adding inputs to create new tasks.
> Command: `mocha test/exercise_5.js --timeout 5000 --reporter ./test/log_formatter.js`

To create a new task, we'll add a label, text field, and submit button to our HTML:

    <html ng-app="MyApp">
      <body>

        <label>New Task</label>
        <input type="text"></input>
        <input type="submit" class="button"></input>

        <ul>
          <li ng-repeat="task in tasks">{{ task.name }}</li>
        </ul>
      </body>
    </html>
