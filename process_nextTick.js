/**
 * Created by xiejdm on 15-11-22.
 */
/**
 * uses an asynchronous call to read a file from the disk. Once it has
 * read the file, it’ll keep a cached version in memory. Subsequent calls will return the
 * cached version. When returning the cached version, process.nextTick is used so
 * the API still behaves asynchronously. That makes the output in the terminal read in
 * the expected order.
 */

var EventEmitter = require('events').EventEmitter;

var fs = require('fs');

var content;

function readFileIfRequired(cb) {
  /**
   * If the content hasn’t been read into memory, read it asynchronously.
   */
  if (!content) {
    fs.readFile(__filename, 'utf8', function(err, data) {
      content = data;
      console.log('readFileIfRequired: readFile');
      cb(err, content);
    })
  } else {
    /**
     * If the content has been read, pass the cached version to the callback,
     * but first use process.nextTick to ensure the callback is executed later.
     */
    process.nextTick(function() {
      console.log('readFileIfRequired: cached');
      cb(null, content);
    });
  }
}

/**
 * Make subsequent calls to the asynchronous operation to ensure it behaves as expected.
 */
readFileIfRequired(function(err, data) {
  console.log('1. Length: ', data.length);
  readFileIfRequired(function(err, data2) {
    console.log('2. Length:', data2.length);
  });

  console.log('Reading file again...');
});

console.log('Reading file ...');