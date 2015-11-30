/**
 * Created by xiejdm on 15-11-29.
 */
var util = require('util');

var events = require('events');

function MusicPlayer() {
  events.EventEmitter.call(this);
};

util.inherits(MusicPlayer, events.EventEmitter);

var musicPlayer = new MusicPlayer();

musicPlayer.on('play', function(track) {
  this.emit('error', 'unable to play!');
});

/**
 * Listening for an error event
 */
musicPlayer.on('error', function(err) {
  console.log('Error: ', err);
});

setTimeout(function() {
  musicPlayer.emit('play', 'Little Comets - Jennifer');
}, 1000);
