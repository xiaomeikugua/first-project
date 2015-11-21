var Writable = require('stream').Writable;
var util = require('util');

module.exports = CountStream;

/**
 * inherit from the Writable base class
 * Streams inherit from EventEmitter , so they have the same emit and on methods.
 */
util.inherits(CountStream, Writable);

function CountStream(matchText, options){
  Writable.call(this, options);
  this.count = 0;
  this.matcher = new RegExp(matchText, 'ig')
}

CountStream.prototype._write = function(chunk, encoding, cb){
  console.log(chunk.toString());
  var matches = chunk.toString().match(this.matcher);
  if (matches) {
    this.count += matches.length;
  }

  cb();

};

/**
 * call end when there’s no more data
 */
CountStream.prototype.end = function(){
  this.emit('total', this.count);
};
