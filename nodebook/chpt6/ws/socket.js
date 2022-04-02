const webSocket = require("ws");

module.exports = (server) => {
  const wss = new WebSocket.Server({server});

  wss.on('connection', (ws, req)=>{
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    console.log('New Client : ', ip);
    ws.on('message', (msg)=>{
      console.log(msg);
    });

    ws.on('error', (err)=>{
      console.error(err);
    });

    ws.on('close', ()=>{
      console.log('Client connect off');
      clearInterval(ws.interval);
    });

    ws.interval = setInterval(()=>{
      if (ws.readyState === ws.OPEN){
        ws.send('Message from server');
      }
    }, 3000);
  });
};
