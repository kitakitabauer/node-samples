'use strict';
console.log('--- findIndex ---');

const _ = require('lodash');

let users = [
  {'name': 'nyan', age: 36},
  {'name': 'yasusu', age: 31},
  {'name': 'kittan', age: 32}
];

// Native
console.log(users.findIndex(user => user.age > 32));

// lodash
console.log(_.findIndex(users, user => user.age > 32));
