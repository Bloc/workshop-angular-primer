var http      = require('http');
var fs        = require('fs');
var assert    = require('assert');
var Horseman  = require('node-horseman');

describe("angular initialization", function() {
  before(function(){
    this.horseman = new Horseman();
    this.server  = http.createServer(function (req, res) {
      var index = fs.readFileSync('index.html', {encoding: "utf8"});
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(index);
      res.end();
    }).listen(3000);
  });

  it("interpolates {{ 5 + 5 }}", function() {
    return this.horseman
      .open('http://localhost:3000')
      .text("h1")
      .then(function(text) {
        assert.equal(text, " 10 ");
      });
  });

  it("has an HTML tag", function() {
    return this.horseman
      .open('http://localhost:3000')
      .count("html")
      .then(function(count) {
        assert.equal(count, 1);
      });
  });

  after(function() {
    this.horseman.close();
    this.server.close();
  });
})
