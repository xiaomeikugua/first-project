/**
 * Created by xiejdm on 15-11-30.
 */
var express = require('express');

var app = express();

app.on('hello-alert', function() {
  console.warn('Warning!');
});

app.get('/', function(req, res) {
//  console.log(req);
  res.app.emit('hello-alert');
  res.send('hello world');
});

app.listen(3000);