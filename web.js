var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

var buffer = new Buffer(100);
buffer.write(fs.readFileSync("index.html"),"utf-8");
var str = buffer.toString("utf-8");

app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
