/**
 * Created by xiejdm on 15-11-22.
 */

/**
 * Read from stdin so the program will run until CTRL-C is pressed or it’s killed.
 */
process.stdin.resume();

/**
 * Binding a listener to the SIGHUP signal.
 */
process.on('SIGHUP', function () {
  console.log('Reloading configuration ...');
});

/**
 * The PID is displayed so you can use it to send signals using the kill command.
 */
console.log('PID: ', process.pid);