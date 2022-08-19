// const { io } = require("socket.io-client");
import {io} from "socket.io-client"

// const socket = io("ws://127.0.0.1:8080");

// socket.on("welcome", (arg) => {
//     console.log(arg)
// });

// socket.on("JobList" , (arg) => 
//   {console.log(arg)}
// );

let socket;

export const init =  () => {
  socket = io("ws://127.0.0.1:8080",{transports : ["websocket"]});
  socket.on("connect",() => console.log("Client connected to the server"));
  console.log("init socket api")
};

export const subscribe = (cb) => {
  socket.on("JobList" , (arg) => {
    console.log(arg);
    cb(arg);
  });
}





