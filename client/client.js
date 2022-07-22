let socket = io.connect();    ///// this might be needed here to run


// checking how many clients connected
let counter = 0;
counter++;
console.log(counter+' someone connected');


// User select (dropdown)

let selectUser = document.getElementById("selectUser");
let users = ["Korvo", "Terry", "Jesse", "Yumyulack", "Mr. Nanobots", "Red Goobler", "Mork", "A.L.F.", "Rufus", "Xeno"];

for(let i = 0; i < users.length; i++) {
    let opt = users[i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectUser.appendChild(el);
};

selectUser.addEventListener('change', (event) => {
    // let result = document.getElementById('userName');
    userName = event.target.value;
    console.log(userName + ' i am i am');
    socket.emit('sendUserName', userName);
});


// button (sendToAll)
document.getElementById('sendToAll').addEventListener('click', () => {
    let msg = document.getElementById('msg').value;
    socket.emit('sendToAll', msg);
});


// define target for prints
let target = document.getElementById("target");



// receive message back from server (step 14)
socket.on('displayMessage', message => {
    
    // add time
    let time = new Date().toLocaleString('en-GB', { timeZone: 'UTC' });
    target.innerHTML += '<tr><td>' + userName + '</td><td>' + message + '</td><td>' + time + '</td></tr>';

    // target.append(`<td>user</td>`);
    console.log(message + ' message works');           ////// these seem to work!!!!
});



// just a test
console.log('I work in client'); // +