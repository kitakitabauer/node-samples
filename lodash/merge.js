'use strict';
console.log('--- merge ---');

const _ = require('lodash');

let users = {
  'data': [
    {'name': 'barney'},
    {'name': 'fred'}
  ]
};
let ages = {
  'data': [
    {'age': 36},
    {'age': 40}
  ]
};

// Native
let merge = function(obj1, obj2) {
  if (!obj2) {
    obj2 = {};
  }
  for (let attrname in obj2) {
    if (obj2.hasOwnProperty(attrname)) {
      obj1[attrname] = obj2[attrname];
    }
  }
};

// merge(users, ages);
console.log(users);

// lodash
console.log(_.merge(users, ages));
// →{ data: [ { name: 'barney', age: 36 }, { name: 'fred', age: 40 } ] }
