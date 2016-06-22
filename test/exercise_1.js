var assert    = require('assert');
var Horseman  = require('node-horseman');
var express   = require('express'), app = express(), port = 4000;

app.use(express.static("."));
app.listen(port);

describe("angular script", function() {
  before(function(){
    this.horseman = new Horseman();
  });

  it("loads the angular library", function() {
    return this.horseman
      .open('http://localhost:' + port)
      .evaluate(function(){
        return angular;
      })
      .then(function(angular) {
        assert.notDeepEqual(angular, null);
      });
  });
})
