'use strict';
console.log('--- min ---');

const _ = require('lodash');

let arr = [4,2,8,6];

// min
// Native
console.log(Math.min.apply(null, arr)); // applyの第一引数のオブジェクトはthisだが、何であれMath.max()の結果には影響しない

// lodash
console.log(_.min(arr));
// → 2
console.log(_.min([]));
// → undefined



// minBy
console.log('--- minBy ---');

let objects = [{'n': 1}, {'n': 2}];

console.log(_.minBy(objects, o => o.n));
// → { 'n': 1 }
console.log(_.minBy(objects, 'n'));
// → { 'n': 1 }
