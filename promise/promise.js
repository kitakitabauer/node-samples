'use strict';

//////////
// before
//////////
let i = 0;

const timer = function() {
  console.log(i);
  i++;

  if (i < 5) {
    setTimeout(timer, 1000);
  }
};

timer();

//////////
// after
//////////
const co = require('co');

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

co(function*() {
  // for文が使えるようになった分、同期的に見える
  for (let i = 0; i < 5; i++) {
    console.log(i);
    yield sleep(1000);
  }
});
