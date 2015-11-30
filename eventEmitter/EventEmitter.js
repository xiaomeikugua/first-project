/**
 * Created by xiejdm on 15-11-29.
 */
var util = require('util');

var events = require('events');

var AudioDevice = {
  play: function(track) {
    //Stub: Trigger playback throught iTunes, mpg123, etc.
  },
  stop: function() {

  }
};

/**
 * The class’s state can be configured, and then EventEmitter’s constructor can be called as required.
 * @constructor
 */
function MusicPlayer() {
  this.playing = false;
  events.EventEmitter.call(this);

}


/**
 * The inherits method copies the methods from one prototype into another—
 * this is the general pattern for creating classes based on EventEmitter.
 */
util.inherits(MusicPlayer, events.EventEmitter);


var musicPlayer = new MusicPlayer();

musicPlayer.on('play', function(track) {
  this.playing = true;
  AudioDevice.play(track);
});

musicPlayer.on('stop', function() {
  this.playing = false;
  AudioDevice.stop();
});

/**
 * New listeners can be added as needed.
 */
musicPlayer.emit('play', function(track) {
  console.log('Track now playing: ', track);
});

/**
 * The emit method is used to trigger events.
 */
musicPlayer.emit('play', 'The Roots - The Fire');

setTimeout(function() {
  musicPlayer.emit('stop');
}, 1000);