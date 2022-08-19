const { io } = require("socket.io-client");

const socket = io("ws://127.0.0.1:8080");

socket.on("welcome", (arg) => {
    console.log(arg)
});


socket.on("JobList" , (arg) => {console.log(arg)});



// const divDOM = document.querySelector(".joblist");
// divDOM.innerHTML= "heyy";




