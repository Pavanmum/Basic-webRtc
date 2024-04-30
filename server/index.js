const express = require('express');
const bodyParser = require('body-parser'); 
const {Server} = require('socket.io')

const io = new Server({
    cors : true,
});
const app = express();

app.use(bodyParser.json());
const emailToMapping = new Map();

io.on('connection', (socket) => {
    console.log('User connected');
   
        socket.on("join-room", (data)=>{
            const {roomId, userId} = data
            console.log(`User ${userId} joined room ${roomId}`)
            emailToMapping.set(userId, socket.id)   
            socket.join(roomId)
            socket.emit("joined-room", {roomId})
            socket.broadcast.to(roomId).emit("user-joined", {userId})
        })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
io.listen(3001);