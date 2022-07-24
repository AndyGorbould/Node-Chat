// require express & http
const express = require("express");
const http = require("http");

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
const io = require("socket.io")(server);

// make connection client>server    //  //  //  CONNECTION FUNCTION (server)
let i = 0;
io.on("connection", (socket) => {
  i++;
  console.log(i + " someone is connected");
  socket.on("sendToAll", (msg) => {
    io.emit("displayMessage", msg);
  });
  socket.on("sendUserName", (userName) => {
    io.emit("displayMessage", userName);
  });
});

// just a test
console.log("I work in server terminal"); // this DOES log in the terminal :)



// make empty array for users, let client have, link with socket id, 
// don't store local!! only in server :)
// send obj with user & msg, OR sock ID & msg, 
// 