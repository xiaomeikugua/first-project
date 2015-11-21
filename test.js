/**
 * We can write a short test for CountStream without using any third-party modules.
 * Node comes with a built-in assert module, so we can use that for a quick test.
 */
var assert = require('assert');
var CountStream = require('./countstream');
var countStream = new CountStream('example');
var fs = require('fs');
var passed = 0;

/**
 * listen for the total event, which is emitted by instances of CountStream
 * The 'total' event will be emitted when the stream is finished.
 */
countStream.on('total', function (count) {
 // assert that the number of matches should be the same as what is expected
  assert.equal(count, 1);
  passed++;
});

/**
 * Create a readable stream of the current file, and pipe the data through CountStream.
 */
fs.createReadStream(__filename).pipe(countStream);

/**
 * Just before the program is about to exit, display how many assertions have been run.
 */
process.on('exit', function(){
  console.log('Assertions passed:', passed);
});

