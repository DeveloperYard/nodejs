import express from 'express';
import cors from 'cors';
const app = express();

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); // 서버가 허용을 했으니 데이터를 가져와서 표기를 해도 되겠구나!
//   // 다른 IP에서는 데이터 교환이 불가능!
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'OPTIONS, GET, POST, PUT, DELETE'
//   );
//   next();
// });

app.use(
  cors({
    origin: ['http://127.0.0.1:5500'],
  }));

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(8080);