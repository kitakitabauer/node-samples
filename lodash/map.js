'use strict';
console.log('--- map ---');

const _ = require('lodash');

let users = [
  {name: 'barney'},
  {name: 'fred'}
];

// Native
console.log(users.map(o => o.name));

// lodash
console.log(_.map(users, 'name'));
