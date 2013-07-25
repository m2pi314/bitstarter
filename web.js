var fs     = require('fs');
var express = require('express');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {

  /* read the file index.html*/
  var buff = fs.readFileSync('index.html');
  var str  = buff.toString('utf8',0,buff.length);  

  response.send(str);





});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
 

