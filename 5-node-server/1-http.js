const http = require('http')
const fs = require('fs');
// const http2 = require('http2'); // https와 함께 적용됨!

// console.log(http.STATUS_CODES)
// console.log(http.METHODS)
// listen만 하고 res가 없다면 timeout error가 시간이 지난 후 발생함
const server = http.createServer((req, res)=>{
  console.log('incomming...');
  // req의 정보들을 각각 콘솔에 찍음
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.url);
  const url = req.url;
  // 각각의 url에 따라 다르개 나타내줌
  // res.setHeader(name, value)가 원래 syntax임
  
  res.setHeader('Content-Type', 'text/html')
  if(url === '/'){
    fs.createReadStream('./html/index.html').pipe(res);
  }
  else if(url === '/course'){
    fs.createReadStream('./html/course.html').pipe(res);
  }
  else{
    fs.createReadStream('./html/notFound.html').pipe(res);
  }
  // 위에서의 코드와 같이 html, json 타입을 모두 주고받을 수 있음
});

server.listen(8080); // connect through 8080 port