var http      = require('http');
var fs        = require('fs');
var assert    = require('assert');
var Horseman  = require('node-horseman');

describe("angular script", function() {
  before(function(){
    this.horseman = new Horseman();
    this.server   = http.createServer(function (req, res) {
      var index = fs.readFileSync('index.html', {encoding: "utf8"});
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(index);
      res.end();
    }).listen(3000);
  });

  it("loads the angular library", function() {
    return this.horseman
      .open('http://localhost:3000')
      .evaluate(function(){
        return angular;
      })
      .then(function(angular) {
        assert.notDeepEqual(angular, null);
      });
  });

  after(function() {
    this.horseman.close();
    this.server.close();
  });
})
