
// require express & http
const express = require('express');
const http = require('http');

// express & http to host client
const app = express();
const clientPath = `${__dirname}/../client`;
app.use(express.static(clientPath));
const server = http.createServer(app);

// get server live
server.listen(8080, () => {
    console.log('server is running on "+port"');
});

// set up socket.io on server
const io = require('socket.io')(server);
// let socket = io.connect();  //// wrong place needs in script.js

// make connection client>server
io.on('connection', (socket) => {
    console.log('someone is connected');
    socket.on('sendToAll', (message) =>{
        io.emit("displayMessage", (message));
    });
});


// define btn & listen
let target = document.getElementById("target");

// receive message back from server (step 14)
socket.on('displayMessage', (message) => {
    target.innerHTML += '<br>' + message;
});



// just a test
console.log('I work in server');