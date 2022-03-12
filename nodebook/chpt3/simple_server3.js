const http = require('http');

const server = http.createServer((req, res)=>{
  res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
  res.write('<h1>Node.js create server</h1>');
  res.end('<p>chpt3 http modile studying.. </p>');
}).listen(8080);

server.on('listening', ()=>{
  console.log('8080 port connecting server');
})

server.on('error', (error)=>{
  console.log(error);
})