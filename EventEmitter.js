/**
 * Created by xiejdm on 15-11-22.
 */
var EventEmitter = require('events').EventEmitter;

function complexOperations() {
  var events = new EventEmitter();

  /**
   * The event will now be emitted when the listener is ready.
   */
  process.nextTick(function() {
    events.emit('success');
  });

  return events;
}

complexOperations().on('success', function () {
  console.log('success!');
});

