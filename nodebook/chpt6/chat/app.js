const http = require("http");
const express = require("express");
const app = express();

const server = http.Server(app);
const io = require("socket.io")(server);
let users = [];

server.listen(8080, ()=>{
  console.log("8080 포트에서 서버 실행 중 .. ");
})

app.get('/', (req, res)=>{
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket)=>{
  let name = "";
  socket.on("has connected", (username)=>{ // event : has connected
    name = username;
    users.push(username);
    io.emit("has connected", {username: username, usersList: users}); // connect username to userList
  });

  socket.on("has disconnected", ()=>{ // event : has disconnected
    users.splice(users.indexOf(name), 1); // remove user using by splice function
    io.emit("has disconnected", {useranme: name, usersList: users});
  })

  socket.on("new message", (data)=>{ // event : new Message, receive message
    io.emit("new message", data); // 모든 소켓에 메시지를 보냄, 
  })
})

