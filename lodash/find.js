'use strict';
console.log('--- find ---');

const _ = require('lodash');

let users = [
  {'name': 'nyan', age: 36},
  {'name': 'yasusu', age: 31},
  {'name': 'kittan', age: 32}
];

// Native
console.log(users.find(user => user.age > 32));

// lodash
console.log(_.find(users, user => user.age > 32));
