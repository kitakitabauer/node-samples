'use strict';
console.log('--- clone ---');

const _ = require('lodash');

const personList = [
  { 'name': 'Haru39', 'age': 26 },
  { 'name': 'yutapon', 'age': 18 }
];

// clone
const clone = _.clone(personList);
const result1 = clone[0] === personList[0];

console.log(result1);
// → true

// cloneDeep
const deep = _.cloneDeep(personList);
const result2 = deep[0] === personList[0];

console.log(result2);
// → false
