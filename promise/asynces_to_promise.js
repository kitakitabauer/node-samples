'use strict';
const async = require('async');

async.eachSeries([1,2,3,4,5], function(num, cb) {
  setTimeout(function() {
    console.log(num);
    cb();
  }, 1000);
}, function(err) {
  console.log('Finish');
});

const Promise = require('bluebird');

// Promiseでの逐次実行はメソッドチェインになるので、
// Array.reduceでメソッドチェインを作成する処理がasync.eachSeriesと同じ処理になる
[1,2,3,4,5].reduce(function(promise, num) {
  return promise.then(function(value) {
    return new Promise(function(onFulfilled, onRejected) {
      setTimeout(function() {
        console.log(num);
        onFulfilled(num);
      }, 1000);
    });
  });
// Array.reduceの初期値にPromise.resolveの返す値を渡すことで、
// Array.reduceのコールバック内で配列の最初の要素か判定する処理を省略している。
}, Promise.resolve()).then(function(value) {
  console.log('Finish');
});
