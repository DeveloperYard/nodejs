import express from 'express'

const app = express()

// app.all('/api/*', (req, res, next)=>{ // 딱 api 경로에 한해서만 작동함, '/api/*' 이런식으로 해야 use처럼 사용 가능
//   console.log('all');
//   next();
// });

// app.use('/sky', (req, res, next)=>{ // sky로 시작하는 어떤 경로든 전부 커버 가능함!
//   console.log('use');
//   next();
// });

app.get(
  '/',
  (req, res, next)=>{
    console.log('first');
    if(true){
      return res.send('Hello'); // 이런 식으로 리턴해야 하나만 send할 수 있음
      // = 
      // res.send('Hello');
      // return;
    }
    res.send('Yard');

    // 에러 발생! 클라이언트에게 한 번 send하고 또 다시 send하면 에러 뜸!
  },
  (req, res, next)=>{
    console.log('first2')
  }
)

// app.use, all 비슷하나 차이 존재!
// app.get('/sky/:id',(req, res, next)=>{
//   //console.log(req.path);
//   //console.log(req.headers)
//   console.log(req.params)
//   console.log(req.params.id)
//   console.log(req.query)
//   console.log(req.query.keyword)
//   //res.send('hi!') // 데이터 전달 가능!
//   //res.json({name:"Yard"});
//   //res.sendStatus(400);
//   res.setHeader('key', 'value'); // 헤더도 설정 가능!
//   res.status(201).send('created'); // 처리된 결과에 따라서 적절한 상태 코드를 설정하고 
// });

// app.get('/', (req, res, next)=>{
//   console.log('first');
//  // next('route'); // route 설정 시 first2 무시하고 다음으로 넘어감
//   //next(new Error(error));
//   res.send('Hello'); // 한 번 맨 위에서 반응하고 나면 그 다음 미들웨어는 호출되지 않음
// },
// (req, res, next)=>{
//   console.log('first2');
// });

app.get('/', (req, res, next)=>{
  console.log('second');
  // res.send('end!!');
});

app.use((req, res, next)=>{
  res.status(404).send('Not available') // 처리할 수 없는 경로에 대해서!
})
app.use((error, req, res, next)=>{
  console.error(error);
  res.status(500).send('Sorry, try later');
})

app.listen(8080, ()=>{
  console.log('who come in!');
});

//IP
//PORT, what app?
