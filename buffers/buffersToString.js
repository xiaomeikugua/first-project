/**
 * Created by xiejdm on 15-11-22.
 */

var fs = require('fs');

fs.readFile('./names.txt', function (er, buf) {

  /**
   * toString by default will convert data into a UTF-8 encoded string.
   */
  console.log(buf.toString());

  /**
   * toString accepts an encoding as the first argument.
   */
  console.log(buf.toString('ascii'));
});