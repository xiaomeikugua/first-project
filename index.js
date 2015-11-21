/**
 * Created by xiejdm on 15-11-21.
 */

var CountStream = require('./countstream');

var countStream = new CountStream('/center');

var http = require('http');

/**
 * When you pipe data, it doesn’t matter how big it is or if the network is slow: the CountStream class will duti-
 * fully count matches until the data has been processed.This Node program does not download the entire file first!
 * It takes the file—piece by piece—and processes it.That’s the big thing here, and a critical aspect to Node
 * development.
 */
http.get('http://www.manning.com', function(res){
  res.pipe(countStream);
});

countStream.on('total', function(count){
  console.log('Total matches: ', count);
});