'use strict';
console.log('--- transform_reduce ---');

const _ = require('lodash');

const array = [1,2,3,4,5];

let ret1 = _.reduce(array, function(memo, idx) {
  memo[idx] = true;
  return memo;
}, {});

console.log(ret1);

let ret2 = _.transform(array, function(memo, idx) {
  memo[idx] = true;
}, {});

console.log(ret2);
