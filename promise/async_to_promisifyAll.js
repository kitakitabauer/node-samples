'use strict';

const Promise = require('bluebird');
const async = require('async');
// bluebirdを使用している場合、Promise.promisifyAllを使ってPromise版のasync.jsメソッドを使用することができる
Promise.promisifyAll(async);

// Asyncサフィックスを持つメソッドをPromise版メソッドとして追加する
async.eachAsync([1,2,3,4,5], function(num, cb) {
  setTimeout(function() {
    console.log(num);
    cb();
  }, 1000);
}).then(function(value) {
  console.log('Finish');
});
