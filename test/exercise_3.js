var assert    = require('chai').assert;
var Horseman  = require('node-horseman');
var express   = require('express'), app = express(), port = 4000;

app.use(express.static("."));
app.listen(port);


describe("angular app", function() {
  before(function(){
    this.horseman = new Horseman();
  });

  it("displays a single todo", function() {
    return this.horseman
      .open('http://localhost:' + port)
      .text("ul.tasks li:first")
      .then(function(text) {
        assert.match(text, /Do the thing/);
      });
  });
})
