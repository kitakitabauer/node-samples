'use strict';
console.log('--- reduce ---');

const _ = require('lodash');

// const items = _.range(100);
const items = [1, 1, 2, 3];

console.log(items.reduce((sum, current) => sum + current));
console.log(_.reduce(items, (sum, current) => sum + current));
