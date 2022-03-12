const http = require('http');

http.createServer((req, res, next)=>{})
  .listen(8080, ()=>{
    console.log('at 8080 port connecting server');
  })