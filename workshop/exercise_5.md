> Description: Add input fields for creating new tasks.
> Command: `mocha test/exercise_5.js --timeout 5000 --reporter test/log_reporter.js`

### Objectives

After this exercise, you should be able to:

- Identify and explain the `<label>` and `<input>` tags

### Example

In HTML, an [`<input>` tag](http://www.w3schools.com/tags/tag_input.asp) creates a field, like a text field or button, where the user can enter data. [The `<label>` tag](http://www.w3schools.com/tags/tag_label.asp) specifies human-readable label text associated with an input field.

For example:

```html
<label>New Task</label>
<input type="text"></input>
<input type="submit" class="button"></input>
```

### Exercise

- Add a label, text field, and submit button to our HTML above the task list