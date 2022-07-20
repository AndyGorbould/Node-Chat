let socket = io.connect();    ///// this might be needed here to run


// checking how many clients connected
let counter = 0;
counter++;
console.log(counter+' someone connected');


// User select (dropdown)
let select = document.getElementById("selectUser");
let users = ["Korvo", "Mork", "A.L.F.", "Rufus", "Xeno"];

for(let i = 0; i < users.length; i++) {
    let opt = users[i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
};


// button (sendToAll)
document.getElementById('sendToAll').addEventListener('click', () => {
    let msg = document.getElementById('msg').value;
    socket.emit('sendToAll', (msg));
});

// define target for prints
let target = document.getElementById("target");

// receive message back from server (step 14)
socket.on('displayMessage', (message) => {
    target.innerHTML += '<br>' + message;
    console.log(message + ' i work');           ////// these seem to work!!!!
});



// just a test
console.log('I work in client'); // +
