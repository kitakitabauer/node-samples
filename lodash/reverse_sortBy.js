'use strict';
console.log('--- reverse_sortBy ---');

const _ = require('lodash');

const users = [
  {'name': 'fred',   'age': 36},
  {'name': 'barney', 'age': 40},
  {'name': 'fred',   'age': 26},
  {'name': 'barney', 'age': 30}
];
cnnst usersCopy = _.clone(users);

console.time('reverse');
for (var i = 0; i < 100000; i++) {
  users = _.sortBy(users, 'age').reverse();
}
console.timeEnd('reverse');
console.log(users);

console.time('内部で解決');
for (var i = 0; i < 100000; i++) {
  // Numberならこれでいける
  usersCopy = _.sortBy(usersCopy, function(user) {
    return -user.age;
  });
}
console.timeEnd('内部で解決');
console.log(usersCopy);
