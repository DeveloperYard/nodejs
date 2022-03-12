const http = require('http');
const fs = require('fs').promises;

http.createServer( async (req, res)=>{
  try {
    const f = await fs.readFile('./fs-test.html');
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    // if status code is 200, its successfully processed.
    //console.log(req.xhrAjax);
    res.end(f);
  }
  catch(err){
    console.error(err);
    // if status code is 500, its occured error!
    res.writeHead(500, {'Content-Type':'text/html; charset=utf-8'});
    res.end(err.message);
  }
})
  .listen(8080, ()=>{
    console.log('server connecting at 8080 port');
  })