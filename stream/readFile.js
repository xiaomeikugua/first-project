/**
 * Created by xiejdm on 15-11-30.
 * You want to send a file from a web server to a client in an efficient manner that will
 * scale up to large files
 */
var http = require('http');

var fs = require('fs');

/**
 * it’ll read the entire file into memory.
 */
http.createServer(function(req, res) {
  fs.readFile(__dirname + '/index.html', function(err, data) {
//    console.log(__dirname)
//    console.log('err', err);
//    console.log('data', data);
    if (err) {
      res.statusCode = 500;
      res.end(String(err));
    } else {
      res.end(data);
    }
  })
}).listen(8000);
