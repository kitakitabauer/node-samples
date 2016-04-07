'use strict';

const Promise = require('bluebird');

// 関数が追加される
// fs.readFile -> fs.readFileAsync
// fs.writeFileFile -> fs.writeFileAsync
const fs = Promise.promisifyAll(require('fs'));

// 実行
fs.readFileAsync('input.txt', 'utf-8')
.then((text) => {
  const output = text + '\nwrite';
  return fs.writeFileAsync('output.txt', output);
})
.then(() => {
  return fs.readFileAsync('output.txt', 'utf-8');
})
.then((text) => {
  console.log(text);
})
.catch((err) => {
  console.log(err);
});
