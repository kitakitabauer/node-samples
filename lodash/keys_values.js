'use strict';
console.log('--- keys, values ---');

const _ = require('lodash');

let obj = {'a': {'z': 1}, 'b': {'y': 2}, 'c': {'x': 3}};

// Native
console.log(Object.keys(obj));
// → [ 'a', 'b', 'c' ]

let values = [];
for (let key in obj) {
  values.push(obj[key]);
}
console.log(values);
// → [ { z: 1 }, { y: 2 }, { x: 3 } ]

// lodash
console.log(_.keys(obj));
// → [ 'a', 'b', 'c' ]

console.log(_.values(obj));
// → [ { z: 1 }, { y: 2 }, { x: 3 } ]
