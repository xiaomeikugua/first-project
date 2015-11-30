/**
 * Created by xiejdm on 15-11-30.
 * Our custom readable stream, StatStream , inherits from stream.Readable
 * and implements the _read method, which just sends memory usage data.
 * The _read method must be implemented whenever you want to make a readable
 * stream. When sending the response back to the browser, the stream can
 * be piped to the res object provided by Express without any extra work
 */
var stream = require('stream');

var util = require('util');

var express = require('express');

var app = express();

/**
 * Create a readable stream by inheriting from stream.Readable and
 * calling the parent’s constructor.
 */
util.inherits(StatStream, stream.Readable);

function StatStream(limit) {
  stream.Readable.call(this);
  this.limit = limit;
};

StatStream.prototype._read = function(size) {
  if (this.limit == 0) {
    // Done
    this.push();
  } else {
    // Respond with some data. this sends a string representation
    // of the Node process’s memory usage.
    this.push(util.inspect(process.memoryUsage()));
    this.push('n');
    this.limit--;
  }
};

app.get('/', function(req, res) {
  var statStream = new StatStream(10);
  // Use the standard readable.pipe(writable) pattern to send data back to the browser.
  statStream.pipe(res);
});

app.listen(3000);