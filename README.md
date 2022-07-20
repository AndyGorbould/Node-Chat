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




// in script.js
make doc.body event listener for buttons



//
{"message":"A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received"}


//
time is not updating, needs set when btn pressed??

//
selected user, how to grab data??

//
display messages in opposite order???