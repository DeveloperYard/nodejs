const http = require('http');

http.createServer((req, res)=>{
  console.log(req);
  console.log('-----');
  console.log(res);
})
  .listen(8080, ()=>{
    console.log('8080 port is using to connecting server');
  })