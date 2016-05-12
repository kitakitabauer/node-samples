'use strict';
console.log('--- filter ---');

const _ = require('lodash');

let arr = [ { type: 'A', val: 1 }, { type: 'B', val: 2}, { type: 'C', val: 2}, { type: 'D', val: 1 } ];

// Native
for (let i = 0; i < arr.length; i++) {
  if (arr[i].val === 2) {
    console.log(arr[i]);
  }
}
// →
// { type: 'B', val: 2 }
// { type: 'C', val: 2 }

// lodash
let filtered1 = _.filter(arr, {val: 2});
console.log(filtered1);
// → [ { type: 'B', val: 2 }, { type: 'C', val: 2 } ]

for (let i = 0; i < arr.length; i++) {
  if (arr[i].type === 'A') {
    console.log(arr[i]);
  }
}
// → { type: 'A', val: 1 }

// lodash
let filtered2 = _.filter(arr, {type: 'A'});
console.log(filtered2);
// → [ { type: 'A', val: 1 } ]
