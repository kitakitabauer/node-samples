'use strict';
console.log('--- isObject ---');

const _ = require('lodash');

// Native
console.log(typeof null === 'object');
// → true
// typeofの場合はtrueと判定されてしまう
console.log(typeof true === 'object');
// → false
console.log(typeof 1 === 'object');
// → false
console.log(typeof [1,2,3] === 'object');
// → true
console.log(typeof [] === 'object');
// → true
console.log(typeof {a:1} === 'object');
// → true
console.log(typeof {} === 'object');
// → true
console.log(typeof 'a' === 'object');
// → false
console.log(typeof '' === 'object');
// → false
console.log(typeof new Map([['a', 1]]) === 'object');
// → true
console.log(typeof new Map() === 'object');
// → true
console.log(typeof new Set([1]) === 'object');
// → true
console.log(typeof new Set([]) === 'object');
// → true

// lodash
console.log(_.isObject(null));
// → false
console.log(_.isObject(true));
// → false
console.log(_.isObject(1));
// → false
console.log(_.isObject([1,2,3]));
// → true
console.log(_.isObject([]));
// → true
console.log(_.isObject({a: 1}));
// → true
console.log(_.isObject({}));
// → true
console.log(_.isObject('a'));
// → false
console.log(_.isObject(''));
// → false
console.log(_.isObject(new Map([['a', 1]])));
// → true
console.log(_.isObject(new Map()));
// → true
console.log(_.isObject(new Set([1])));
// → true
console.log(_.isObject(new Set()));
// → true
