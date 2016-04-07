'use strict';
const async = require('async');

async.waterfall([
  function(cb) {
    setTimeout(function() {
      cb(null, 1);
    }, 1000);
  },
  function(value, cb) {
    setTimeout(function() {
      cb(null, 2);
    }, 1000);
  },
], function(err, value) {
  if (err) {
    console.error(err);
    return;
  }

  console.log(value);
});

// .then メソッドチェイン版
const Promise = require('bluebird');

new Promise(function(onFulfilled, onRejected) {
  setTimeout(function() {
    onFulfilled(1);
  }, 1000);
}).then(function(value) {
  return new Promise(function(onFulfilled, onRejected) {
    setTimeout(function() {
      onFulfilled(2);
    }, 1000);
  });
}).then(function(value) {
  console.log(value);
}).catch(function(err) {
  console.error(err);
});
