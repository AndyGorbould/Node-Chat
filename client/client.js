let socket = io.connect();    ///// this might be needed here to run


// checking
let counter = 0;
console.log(counter+' someone connected');


// define btn & listen
let sendAllBtn = document.getElementById("sendToAll");
sendAllBtn.addEventListener("click", sendToAllClicked); // rem. DON'T add () on the func name :D

// tell server what to do
function sendToAllClicked() {
    alert('i was clicked');
    socket.emit('sendToAll', ('message')); // sends ('message') to server
};






// define btn & listen
// let target = document.getElementById("target");


// receive message back from server (step 14)
socket.on('displayMessage', message => {
    // target.innerHTML += '<br>' + message;
    console.log(message);
});











// just a test
console.log('I work in client'); // +

console.log(message['defaultValue']); // this works (client)