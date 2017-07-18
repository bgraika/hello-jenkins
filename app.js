var express = require('express');
 
var app = express();

//just a comment
app.get('/', function (req, res) {
  res.send('hello jenkins');
});
 
app.listen(process.env.PORT || 8080);
 
module.exports = app;