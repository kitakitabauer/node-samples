'use strict';
const async = require('async');

async.parallel([
  function(cb) {
    setTimeout(function() {
      cb(null, 1);
    }, 1000);
  },
  function(cb) {
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

const Promise = require('bluebird');

Promise.all([
  new Promise(function(onFulfilled, onRejected) {
    setTimeout(function() {
      onFulfilled(1);
    }, 1000);
  }),
  new Promise(function(onFulfilled, onRejected) {
    setTimeout(function() {
      onFulfilled(2);
    }, 1000);
  })
// Iterableに含まれる全てのPromiseを実行し、全て成功するとPromiseを返す
]).then(function(value) {
  console.log(value);
}).catch(function(error) {
  console.error(error);
});

