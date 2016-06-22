var assert    = require('chai').assert;
var Horseman  = require('node-horseman');
var express   = require('express'), app = express(), port = 4000;

app.use(express.static("."));
app.listen(port);

describe("angular app", function() {
  before(function(){
    this.horseman = new Horseman();
  });

  it("has a submit button", function() {
    return this.horseman
      .open('http://localhost:' + port)
      .exists("input[type='submit']")
      .then(function(existence) {
        assert.equal(existence, true);
      });
  });

  it("has a label", function() {
    return this.horseman
      .open('http://localhost:' + port)
      .text("label")
      .then(function(label) {
        assert.match(label, /New Task/);
      });
  });

  it("has a text field", function() {
    return this.horseman
      .open('http://localhost:' + port)
      .exists("input[type='text']")
      .then(function(existence) {
        assert.equal(existence, true);
      });
  });
})
