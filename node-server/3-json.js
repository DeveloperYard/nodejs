const http = require('http')
const fs = require('fs');

const courses = [
  {name:'HTML'},
  {name:'CSS'},
  {name:'JS'},
  {name:'Node'},
  {name: 'FrontEnd'}
];

const server = http.createServer((req, res)=>{
  const url = req.url;
  const method = req.method; // how?, action?
  if (url === '/course'){
    if(method === 'GET'){
        res.writeHead(200, {'Content-Type' : 'application/json'});
        res.end(JSON.stringify(courses));
    } else if(method === 'POST'){
      const body = [];
      req.on('data', chunk => {
        console.log(chunk);
        body.push(chunk);
      });

      req.on('end', ()=>{
        const bodyStr = Buffer.concat(body).toString()
        const course = JSON.parse(bodyStr);
        courses.push(course);
        console.log(course);
        res.writeHead(201);
        res.end();
      })
    }
  }
});

server.listen(8080); // connect through 8080 port