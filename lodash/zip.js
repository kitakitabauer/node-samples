'use strict';

console.log('--- zip ---');

const _ = require('lodash');

const arr1 = ['fred', 'barney'],
      arr2 = [30, 40],
      arr3 = [true, false];

const ret1 = _.zip(arr1, arr2, arr3);

console.log(ret1);
// → [ ['fred', 30, true], ['barney', 40, false] ]

const arr4 = ['ryu', 'ken', 'chunri'],
      arr5 = ['male', 'male', 'female'],
      arr6 = [true, false],
      arr7 = [24, 23, 20, 99];

const ret2 = _.zip(arr4, arr5, arr6, arr7);

console.log(ret2);
// →
// [ [ 'ryu', 'male', true, 24 ],
//   [ 'ken', 'male', false, 23 ],
//   [ 'chunri', 'female', undefined, 20 ],
//   [ undefined, undefined, undefined, 99 ] ]
