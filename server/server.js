let express = require('express');

let app = express();
app.set('port', process.env.PORT || 5000);

let clientPath = __dirname.replace('/server', '/client');
app.use('/', express.static(clientPath));

// app.use(function(req, res, next){
//   res.status(404);
//   res.sendFile(clientPath + '/client');
// });


//エラー発生時の処理
app.use(function(err, req, res, next) {
  console.log(err.stack);
  res.status(500).send(err.message);
});

//指定したポートでリクエスト待機状態にする
app.listen(app.get('port'), function () {
  console.log('server listening on port :' + app.get('port'));
});