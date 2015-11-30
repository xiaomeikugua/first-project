/**
 * Created by xiejdm on 15-11-30.
 */
var http = require('http');

var fs = require('fs');

var zlib = require('zlib');

/**
 * Just remember that the general pattern is readable.pipe(writable) .
 */
http.createServer(function(req, res) {
  // Set the header so the browser knows gzip compression has been used.
  res.writeHead(200, {'content-encoding': 'gzip'});
  fs.createReadStream(__dirname + '/index.html')
    .pipe(zlib.createGzip())  // Use two calls to pipe, compress, and stream the file back to the client.
    .pipe(res);

}).listen(8000);
