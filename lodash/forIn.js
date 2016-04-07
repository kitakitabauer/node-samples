'use strict';
console.log('--- forIn ---');

const _ = require('lodash');

function Foo() {
  this.a = 1;
  this.b = 2;
  this.d = function() {}
}

Foo.prototype.c = 3;

_.forIn(new Foo, function(value, key) {
  console.log('key=' + key);
  console.log('value=' + value);
});
