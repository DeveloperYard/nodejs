import express from 'express';
import postRouter from './router/post.js';
import userRouter from './router/user.js';
// app.js 에서는 큰 그림을 볼 수 있게 한 후 모듈화 진행!!

const app = express();

app.use(express.json()); //REST API, body!

app.use(express.urlencoded({extended: false})) // HTML Form submit 시 데이터를 바디 안으로 파싱, HTML Form -> Body
// const options = {
//   dotfiles: 'ignore', // 숨겨진 파일은 보이지 않도록!!
//   ...
//   // 이와 같이 static에 여러가지 옵션을 줄 수 있음!
// }
app.use(express.static('public'))
// -> public setting -> every user able to access file in public folder

app.use('/posts', postRouter);
app.use('/users', userRouter);

// app.get('/index.html', (req,res)=> ...)
// 위 방식은 app.use(express.static()) 으로 해결 가능!
app.listen(8080, ()=>{
  console.log('connect!');
});
