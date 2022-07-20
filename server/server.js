
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
    console.log('server is running on port "8080"');
});

// set up socket.io on server
const io = require('socket.io')(server);
// let socket = io.connect();  //// wrong place needs in script.js

let i = 0;
// make connection client>server
io.on('connection', (socket) => {
    i++;
    console.log(i+ ' someone is connected');
    socket.on('sendToAll', (message) =>{
        io.emit("target", (message));
        // alert('serverr'); // this don't work so the whole func probably doesnt?
    });
});






// just a test
console.log('I work in server'); // doesn't work because I'm server lulz
