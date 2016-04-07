'use strict';
const fs = require('fs');
const Promise = require('bluebird');
// promisifyAllでfsをPromise化
Promise.promisifyAll(fs);

fs.readFileAsync('test_promise_2.js', 'utf-8')
// fs.readFileAsync.thenメソッドのコールバックではnew Promiseで非同期処理を実行するPromiseオブジェクトを返す
.then(function(value) {
  console.log(value);

  // Promiseオブジェクトのコンストラクタに渡される関数はリゾルバ関数と呼ばれ、
  // Promiseオブジェクトが返された次の.thenのonFulfilledとonRejectedを引数に実行される
  return new Promise(function(onFulfilled, onRejected) {
    setTimeout(function() {
      onFulfilled('setTimeout completed');
      // onRejected(new Error('setTimeout failed'));
    }, 1000);
  });

}).then(function(value) {
  console.log(value);
}, function(error) {
  console.error(error);
});
