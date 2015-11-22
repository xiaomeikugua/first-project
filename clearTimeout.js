/**
 * Created by xiejdm on 15-11-22.
 */
function Bomb () {
  this.message = 'Boom!';
};

Bomb.prototype.explode = function() {
  console.log(this.message);
};

var bomb = new Bomb();

var timeoutId = setTimeout(bomb.explode.bind(bomb), 3000);

//console.log("timeoutId: ", timeoutId);
/**
 * Defuse the bomb by calling clearTimeout to prevent bomb.expode from running.
 */
clearTimeout(timeoutId);