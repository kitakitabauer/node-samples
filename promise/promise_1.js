'use strict';
const fs = require('fs');
const Promise = require('bluebird');
// fsモジュールの全てのメソッドをPromise対応させる
Promise.promisifyAll(fs);

// Promise.promisifyAllがfsモジュールに追加したPromise対応版のreadFileメソッド
// Promise.promisifyAllは*Asyncという名前でPromise対応版メソッドをモジュールに追加する
// fs.readFileAsyncメソッドはPromiseオブジェクトを返す
fs.readFileAsync('test_promise_1.js', 'utf-8')
// readFileAsyncが返すPromiseオブジェクトの.thenメソッドを使用し、
// 非同期処理終了後に実行されるコールバックを登録する
// Promiseオブジェクトのメソッドである.thenメソッドは、
// 非同期処理が成功した場合に呼び出されるonFulfilledと、
.then(function(value) {
  console.log(value);
// 失敗した場合に呼び出されるonRejectedの2つの関数を引数に受け取る
// これらはいずれも省略可能
}, function(err) {
  console.error(err);
});
