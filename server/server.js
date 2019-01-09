let express = require('express');

let app = express();
console.log(app);
app.set('port', process.env.PORT || 5000);



let clientPath = __dirname.replace('/server', '/server');
app.use('/', express.static(clientPath));

app.use(function(req, res, next){
  res.status(404);
  res.sendFile(clientPath + '/');
});

//エラー発生時の処理
app.use(function(err, req, res, next) {
  console.log(err.stack);
  res.status(500).send(err.message);
});

// const URL = 'http://jws.jalan.net/APICommon/OnsenSearch/V1/';
// const QUERY = '?count:10';

//指定したポートでリクエスト待機状態にする
app.listen(app.get('port'), function () {
  console.log('server listening on port :' + app.get('port'));
});