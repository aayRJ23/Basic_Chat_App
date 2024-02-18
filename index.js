const express=require('express');
const http=require('http');
const path=require("path");
const {Server}=require('socket.io');

const app=express();
const server=http.createServer(app);
const io=new Server(server);

app.use(express.static(path.resolve("./public")));

app.get('/',(req,res)=>{
    res.sendFile('/public/index.html');
})

io.on('connection', (socket) => {
    socket.on('user-message', (msg) => {
      io.emit('chat-message', msg);
    });
  });

server.listen(1400,()=>console.log("Server started at port 1400"));

