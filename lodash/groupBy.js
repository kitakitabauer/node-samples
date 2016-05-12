'use strict';
console.log('--- groupBy ---');

const _ = require('lodash');

// Native

// lodash
_.groupBy([6.1, 4.2, 6.3], Math.floor);
// → { '4': [4.2], '6': [6.1, 6.3] }

_.groupBy(['one', 'two', 'three'], 'length');
// → { '3': ['one', 'two':, '5': ['three'] }

_.groupBy([
  {
    color: 'blue',
    users: [
      {
        name: 'jim',
        color: 'blue',
        age: '22'
      },
      {
        name: 'Sam',
        color: 'blue',
        age: '33'
      }
    ]
  },
  {
    color: 'green',
    users: [
      {
        name: 'eddie',
        color: 'green',
        age: '77'
      }
    ]
  }
], (obj) => obj.color);
// →
// { blue: [ { color: 'blue', users: [Object] } ],
//   green: [ { color: 'green', users: [Object] } ] }
