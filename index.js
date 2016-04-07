/**
 * IGNORE_LISTを除いたルート直下のスクリプトをrequireする
 */
'use strict';

if (require.main !== module) {
  return;
}

const _ = require('lodash');

const glob = require('glob');

const IGNORE_LIST = [
  'node_modules',
  'heap',
];

glob('**/*.js', {}, function(err, files) {
  const s = _.chain(files)
  .reject(function(file) {
    return _.find(IGNORE_LIST, function(str) {
      return file.includes(str);
    });
  })
  .forEach(function(file) {
    require('./' + file);
  })
  .value()
});

