var assert    = require('chai').assert;
var Horseman  = require('node-horseman');
var express   = require('express'), app = express(), port = 4000;

app.use(express.static("."));
app.listen(port);

describe("angular interpolation", function() {
  before(function(){
    this.horseman = new Horseman();
  });

  it("interpolates {{ 5 + 5 }}", function() {
    return this.horseman
      .open('http://localhost:' + port)
      .text("h1")
      .then(function(text) {
        assert.match(text, /10/);
      });
  });
})
