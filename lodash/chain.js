'use strict';
console.log('--- chain ---');

const _ = require('lodash');

let users = [
  {name: 'fred',   age: 20, gender: 'male'},
  {name: 'barney', age: 30, gender: 'female'},
  {name: 'john',   age: 40, gender: 'male'}
];

let ret1 = _.chain(users)
  .filter(user => user.gender === 'male')
  .map(user => user.name + ' is ' + user.age)
  .take(2)
  .value();

console.log(ret1);
// → [ 'fred is 20', 'john is 40' ]

let objects = {
  b: {n: 1},
  a: {n: 2},
  c: {n: 3}
};

let ret2 = _.chain(objects)
  .keys()
  .sortBy()
  .value();

console.log(ret2);
// → [ 'a', 'b', 'c' ]
