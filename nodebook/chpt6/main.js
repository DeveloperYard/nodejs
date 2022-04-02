import Websocket from 'ws';

const ws = new Websocket('ws://www.host.com/path');

ws.on('open', function open(){
  ws.send('something');
});

ws.on('message', function incoming(data){
  console.log(data);
});
