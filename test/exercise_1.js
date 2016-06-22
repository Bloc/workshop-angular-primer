var http      = require('http');
var fs        = require('fs');
var assert    = require('assert');
var Horseman  = require('node-horseman');

var server  = http.createServer(function (req, res) {
  var index = fs.readFileSync('index.html', {encoding: "utf8"});
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(index);
  res.end();
}).listen(3000);

describe("angular initialization", function() {
  beforeEach(function(){
    this.horseman = new Horseman();
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
    server.close();
  });
})
