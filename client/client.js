let socket = io.connect(); ///// this might be needed here to run

// from DOM
let message = document.getElementById('message');
let user = document.getElementById('user');
let sendAll = document.getElementById('sendAll');
let sendSelf = document.getElementById('sendSelf');

// checking how many clients connected
let counter = 0;
counter++;
console.log(counter + " someone connected");

// send object on click
document.getElementById('sendAll').addEventListener('click', () => {
    let time = new Date().toLocaleString("en-GB", { timeZone: "UTC" });
    socket.emit('chat', {
        user: user.value,
        message: message.value,
        time: time,
    });
});

// define target for prints
let target = document.getElementById('target');

// receive message back from server (step 14)
socket.on('chat', (data) => {
    target.innerHTML +=
        "<tr><td>" +
        data.user +
        "</td><td>" +
        data.message +
        "</td><td>" +
        data.time +
        "</td></tr>";

    // target.append(`<td>user</td>`);
    console.log(message + " message works"); ////// these seem to work!!!!
});

// just a test
console.log("I work in client"); // +
