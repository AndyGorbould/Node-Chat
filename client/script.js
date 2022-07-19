let socket = io.connect();    ///// this might be needed here to run


// checking
let counter = 0;
console.log(counter+' someone connected');



// send message to all (step 12)
socket.emit('sendToAll', ('message'));

socket.on('sendToAll', (message) =>{
    io.emit("displayMessage", (message));
});