
// require express & http
const express = require('express');
const http = require('http');

// express & http to host client
const app = express();
constclientPath = `${__dirname}/../client`;
app.use(express.static(clientPath));
const server = http.createServer(app);

// get server live
server.listen(5500, () => {
    console.log('server is running on "+port"');
});

const io = require('socket.io')(server);
let socket = io.connect();

io.on('connection', (socket) => {
    console.log('someone connected');
});