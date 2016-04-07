'use strict';
console.log('--- range ---');

const _ = require('lodash');

console.log(_.range(4));
// → [ 0, 1, 2, 3 ]
console.log(_.range(-4));
// → [ 0, -1, -2, -3 ]
console.log(_.range(1, 5));
// → [ 1, 2, 3, 4 ]
console.log(_.range(0, 20, 5));
// → [ 0, 5, 10, 15 ]
console.log(_.range(0, -4, -2));
// → [ 0, -2 ]
console.log(_.range(0, 4, 0));
// → [ 0, 0, 0, 0 ]
console.log(_.range(0));
// → []
