var moment = require('moment');

console.log(moment.locale() +
'\n', moment().format('LT') +
'\n', moment().format('LTS') +
'\n', moment().format('L') +
'\n', moment().format('l') +
'\n', moment().format('LL') +
'\n', moment().format('ll') +
'\n', moment().format('LLL') +
'\n', moment().format('lll') +
'\n', moment().format('LLLL') +
'\n', moment().format('llll')
);
