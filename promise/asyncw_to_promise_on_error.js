'use strict';
const async = require('async');

async.waterfall([
  function(cb) {
    setTimeout(function() {
      console.log(1);
      cb(new Error('突然のError!'));
    }, 1000);
  },
  // 次の関数は実行されない
  function(value, cb) {
    setTimeout(function() {
      console.log(2);
      cb(null, 2);
    }, 1000);
  },
], function(err, value) {
  if (err) {
    console.error(err);
    return;
  }

  console.log('finish', value);
});

// .then メソッドチェイン版
const Promise = require('bluebird');

new Promise(function(onFulfilled, onRejected) {
  setTimeout(function() {
    console.log(1);
    onRejected(new Error('突然のError!'));
  }, 1000);
// この .thenのリゾルバ関数が返すPromiseオブジェクトは
// onFulfilled しか持たないので onRejected は呼ばれず次の .thenへ制御が移る
}).then(function(value) {
  return new Promise(function(onFulfilled, onRejected) {
    setTimeout(function() {
      console.log(2);
      onFulfilled(2);
    }, 1000);
  });
// この .thenのリゾルバ関数は値を返すので(return を省略すると undefined が返る)
// onRejected は呼ばれず次の .thenへ制御が移る
}).then(function(value) {
  console.log('finish', value);
// .catch で onRejected をトラップ
}).catch(function(err) {
  console.error(err);
});
