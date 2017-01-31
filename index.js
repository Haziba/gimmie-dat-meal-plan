var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendfile('index.html');
});

app.listen(3003, function(){
  console.log('Brewing up those sweet sweet food plans');
});
