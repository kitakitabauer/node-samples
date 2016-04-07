'use strict';
const async = require('async');

async.each([1,2,3,4,5], function(num, cb) {
  setTimeout(function() {
    console.log(num);
    cb();
  }, 1000);
}, function(err) {
  console.log('Finish');
});

const Promise = require('bluebird');

// 数字の配列をPromiseオブジェクトの配列へと変換してPromise.allに渡すとasync.eachと同様の処理となる
Promise.all([1,2,3,4,5].map(function(num) {
  return new Promise(function(onFulfilled, onRejected) {
    setTimeout(function() {
      console.log(num);
      onFulfilled(num);
    }, 1000);
  });
})).then(function(value) {
  console.log('Finish');
});
