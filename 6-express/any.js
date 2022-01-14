import express from 'express'

const app = express();

// app.get('/', (req, res, next)=>{
//   res.json({
//     name:"yard",
//     age:"26"
//           }); // json은 하나만 보낼 수 있음!, 대신 그 안에 딕셔너리 만들어서는 여러 개 보내기 가능!
// });

app.get('/user/:id', (req, res)=>{
  res.send('user ' + req.params.id);
})

app.listen(8080, ()=>{
  console.log('who come in!');
})