var http      = require('http');
var fs        = require('fs');
var assert    = require('chai').assert;
var Horseman  = require('node-horseman');

describe("angular app", function() {
  before(function(){
    this.horseman = new Horseman();
    this.server   = http.createServer(function (req, res) {
      var index = fs.readFileSync('index.html', {encoding: "utf8"});
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(index);
      res.end();
    }).listen(3000);
  });

  it("displays a single task", function() {
    return this.horseman
      .open('http://localhost:3000')
      .text("ul.tasks li:first")
      .then(function(text) {
        assert.match(text, /Do the thing/);
      });
  });

  after(function() {
    this.horseman.close();
    this.server.close();
  });
})
