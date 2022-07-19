const express = require('express');
const http = require('http');
const io = require('socket.io')(server);
let socket = io.connect();

io.on('connection', (socket) => {
    console.log('someone connected');
});