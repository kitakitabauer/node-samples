/**
 * メモリリークとなるような負荷をかけてnodeがどのぐらいでパフォーマンス劣化するのか確認
 */
var ps = require('process');
var list = [];
for (;;) {
  var rd = Math.random();
  var obj = {rd: rd, 'a':'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'};
  list.push(obj);
  var mem = ps.memoryUsage();
  console.log({'rss': mem.rss / 1024 / 1024, 'heapTotal': mem.heapTotal / 1024 / 1024, 'heapUsed': mem.heapUsed / 1024 / 1024 });
}
