/**
 * Created by xiejdm on 15-11-21.
 * Run with:
 * cat xxx.txt | node process.js
 */

/**
* Tell the stream we’re ready to start reading.
*/
process.stdin.resume();

process.stdin.setEncoding('utf8');


/**
 * This callback transforms the data in chunks when they’re available.
 */
process.stdin.on('data', function(text){
//  console.time('label');
  process.stdout.write(text.toUpperCase());
//  console.timeEnd('label');
});