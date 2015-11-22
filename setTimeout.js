/**
 * Methods can also easily be passed to setTimeout by using Function.prototype .bind . This can be used to bind the
 * first argument to this , or more often the object that the method belongs to. The following listing shows how bind
 * can be used with a simple object.
 */
function Bomb () {
  this.message = 'Boom';
}

Bomb.prototype.explode = function () {
  console.log(this.message);
};

var bomb = new Bomb();

/**
 * Call .bind to ensure the method is bound correctly so it can access internal properties.
 */
setTimeout(bomb.explode.bind(bomb), 5000);