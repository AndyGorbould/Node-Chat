# Node-Chat
Node.js &amp; Socket.io based chatroom


BASH:       (rem. to use the REAL terminal!!)
(to working directory -> server folder)
THEN
$ node server       (starts service?)





// SOCKET
only the client connected

// IO
all connected clients

// index ln:24
onclick="socket.emit('sendToAll', ('message'));"
this should be a function in script? but was conlog=  Uncaught TypeError: Cannot set property 'onclick' of null
(i think this must be fixed in the script, not inline) >>>>>>
INCORRECT = <button name="sendToAll" type="submit">Send Test</button>
CORRECT = <button id="sendToAll" type="submit">Send Test</button>

// GOOD POINTS!!
objects are easier to display without JSON decode etc > this syntax: socket.emit("hello", { name: "John" });



//
time is not updating, needs set when btn pressed?? =----- fixed by putting it in the display message func

// IMPORTANT
selected user, how to grab data??

//
display messages in opposite order???