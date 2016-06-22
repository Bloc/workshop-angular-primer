var assert    = require('chai').assert;
var Horseman  = require('node-horseman');
var express   = require('express'), app = express(), port = 4000;

app.use(express.static("."));
app.listen(port);

describe("angular app", function() {
  before(function(){
    this.horseman = new Horseman();
  });

  it("creates a new task", function() {
    return this.horseman
      .open('http://localhost:' + port)
      .type("input[type='text']", "Make a pizza")
      .click(".button")
      .text("ul.tasks li")
      .then(function(tasks) {
        assert.match(tasks, /Make a pizza/);
      });
  });
})
