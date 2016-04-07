'use strict';
console.log('--- sortBy ---');

const _ = require('lodash');

let users = [
  {'name': 'fred',   'age': 36},
  {'name': 'barney', 'age': 40},
  {'name': 'fred',   'age': 26},
  {'name': 'barney', 'age': 30}
];
let usersCopy = _.clone(users);

// Native
users.sort(function(a, b) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  return 0;
});
console.log(users);

// lodash
console.log(_.sortBy(usersCopy, 'age'));
// name → age の昇順ソート
console.log(_.sortBy(usersCopy, ['name', 'age']));
