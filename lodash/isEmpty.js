'use strict';
console.log('--- isEmpty ---');

const _ = require('lodash');

console.log(_.isEmpty(null));
// → true
console.log(_.isEmpty(true));
// → true
console.log(_.isEmpty(1));
// → true
console.log(_.isEmpty([1,2,3]));
// → false
console.log(_.isEmpty([]));
// → true
console.log(_.isEmpty({a: 1}));
// → false
console.log(_.isEmpty({}));
// → true
console.log(_.isEmpty('a'));
// → false
console.log(_.isEmpty(''));
// → true
console.log(_.isEmpty(new Map([['a', 1]])));
// → true
console.log(_.isEmpty(new Map()));
// → true
console.log(_.isEmpty(new Set([1])));
// → true
console.log(_.isEmpty(new Set()));
// → true
