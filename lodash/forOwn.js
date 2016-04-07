'use strict';
console.log('--- forOwn ---');

const _ = require('lodash');

function Foo() {
  this.a = 1;
  this.b = 2;
  this.d = function() {}
}

Foo.prototype.c = 3;

_.forOwn(new Foo, function(value, key) {
  console.log('key=' + key);
  console.log('value=' + value);
});
