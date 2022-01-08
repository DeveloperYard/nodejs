const http = require('http')
const fs = require('fs');
const ejs = require('ejs')


const name = 'Yard';
const courses = [
  {name:'HTML'},
  {name:'CSS'},
  {name:'JS'},
  {name:'Node'},
  {name: 'FrontEnd'}
];


const server = http.createServer((req, res)=>{
  const url = req.url;
  res.setHeader('Content-Type', 'text/html')
  if(url === '/'){
    ejs.renderFile('./template/index.ejs', {name})
    .then(data => res.end(data));
  }
  else if(url === '/course'){
    ejs.renderFile('./template/course.ejs', {courses})
    .then(data => res.end(data));
  }
  else{
    ejs.renderFile('./template/notFound.ejs', {name})
    .then(data => res.end(data));
  }
  // 위에서의 코드와 같이 html, json 타입을 모두 주고받을 수 있음
});

server.listen(8080); // connect through 8080 port