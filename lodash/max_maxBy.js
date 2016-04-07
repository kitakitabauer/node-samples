'use strict';
console.log('--- max ---');

const _ = require('lodash');

let arr = [4,2,8,6];

// max
// Native
console.log(Math.max.apply(null, arr)); // applyの第一引数のオブジェクトはthisだが、何であれMath.max()の結果には影響しない

// lodash
console.log(_.max(arr));
// →8
console.log(_.max([]));
// → undefined



// maxBy
console.log('--- maxBy ---');

let objects = [{'n': 1}, {'n': 2}];

console.log(_.maxBy(objects, o => o.n));
// → { 'n': 2 }
console.log(_.maxBy(objects, 'n'));
// → { 'n': 2 }
