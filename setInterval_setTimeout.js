/**
 * Created by xiejdm on 15-11-22.
 */
function tick() {
  console.log('tick:', Date.now());
}

function tock() {
  console.log('tock:', Date.now());
}

setInterval(tick, 1000);

/**
 * Run another setInterval after the first one.
 */
setTimeout(function() {
  setInterval(tock, 1000);
}, 500);
