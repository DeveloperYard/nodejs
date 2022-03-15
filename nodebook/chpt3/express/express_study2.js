import express from 'express';
import path from 'path';
const app = express();
const __dirname = path.resolve();
app.set('port', process.env.PORT || 8080);

app.get('/', (req, res, next)=>{
  res.sendFile(__dirname + '/index.html');
});

app.listen(app.get('port'), ()=>{
  console.log(app.get('port'), '번 포트에서 서버 실행 중 ..');
});