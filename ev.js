var EventEmitter = require('events').EventEmitter;

function asyncFunc() {
  var ev = new EventEmitter;
  console.log('in asyncFunc');
  setTimeout(function() {
    ev.emit('done', 'foo', 'bar');
  }, 1000);
  return ev;
}

var async = asyncFunc();
async.on('done', function(arg1, arg2) {
  console.log(arg1, arg2);
});


var ev = new EventEmitter;

ev.on('data', function(data) {
  console.log('on', data);
});
ev.once('data', function(data) {
  console.log('once', data);
});

ev.emit('data', 1);
ev.emit('data', 2);
