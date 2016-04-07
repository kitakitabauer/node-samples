'use strict';

const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

const exec = function*() {
  let input = yield fs.readFileAsync('input.txt', 'utf-8');
  const output = input + '\nwrite';
  yield fs.writeFileAsync('output.txt', output);
  input = yield fs.readFileAsync('output.txt', 'utf-8');
  console.log(input);
};

// 実行
Promise.coroutine(exec)().catch((err) => {
  console.log(err);
});
