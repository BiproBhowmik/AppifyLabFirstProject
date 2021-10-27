// const express = require('express');
// const app = express();
// const http = require('http');
// const expressServer = http.createServer(app)

// const {Server} = require('socket.io');
// let io = new Server (expressServer);

// app.get('/', function(req, res){
//     res.sendFile(__dirname+"/index.html")
// })

// io.on('connection', function(socket){
//     console.log("New connected")
// })

// expressServer.listen(3000, function(){
//     console.log("3000 server");
// })
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3333;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log("User Connected")
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', ()=> {
    console.log("User Disconnected")
  })
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});