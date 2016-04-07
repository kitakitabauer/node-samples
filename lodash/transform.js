'use strict';
console.log('--- transform ---');

const _ = require('lodash');

// 配列
let array = [1,2,3];
let doubleArray = _.transform(array, function(result, number) {
  result.push(number * 2);
  return result;
});

console.log(array);
// → [1, 2, 3]
console.log(doubleArray);
// → [2, 4, 6]

// オブジェクト
const object = {
  first: 1,
  second: 2,
  third: 3
};
const doubleObject = _.transform(object, function(result, value, key) {
  result[key] = value * 2;
  return result;
});

console.log(object);
// → {first: 1, second: 2, third: 3}
console.log(doubleObject);
// → {first: 2, second: 4, third: 6}
