var express = require('express'), app = express(), port = 4000;

app.use(express.static("."));
app.listen(port);

var fs        = require('fs');
var assert    = require('chai').assert;
var Horseman  = require('node-horseman');

describe("angular app", function() {
  before(function(){
    this.horseman = new Horseman();
  });

  it("displays multiple tasks", function() {
    return this.horseman
      .open('http://localhost:' + port)
      .screenshot("screenshot.png")
      .text("ul.tasks li")
      .then(function(text) {
        assert.match(text, /Do the thing/);
        assert.match(text, /Do another thing/);
      });
  });
})
