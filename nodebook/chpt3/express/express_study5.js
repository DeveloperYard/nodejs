// 오류 처리를 위한 미들웨어 함수
import express from 'express';

const app = express();

app.use((err, req, res, next)=>{
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000);