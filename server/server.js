const { Server } = require("socket.io");
const mongoose = require('mongoose');

const PORT = 8080;
const io = new Server(PORT);
console.log("Socket Server is Running on Port" + " " + PORT);

mongoose.connect("mongodb://127.0.0.1:27017/admin")
mongoose.connection.on("connected",() => console.log("Mongoose Connected"));



const Jobs = require("./models/job_list");

let joblist = [];

async function getJobs(){
   joblist = await Jobs.find({});
//    console.log(joblist);
}

getJobs();

io.on("connection", (socket) => {
    console.log("New Client Connected" + " " + socket.id);
    socket.emit("welcome", "hello from the server");
    socket.emit("JobList", joblist);
  
});







/** new Server fonksyonu ile yazdığımızda io.listen diyerek server'ı kaldırmış oluyoruz. */ 

// const { Server } = require("socket.io");
// const io = new Server({ /* options */ });
// io.on("connection", (socket) => {
//   // ...
// });
// io.listen(3000);


// https://stackoverflow.com/a/66943613

/** direkt port verip oluşturduğumuzda ise zaten o portu dinliyor, bu nedenle kodun sonunda io.listen dediğimizde iki kere dinleyip port dolu diye hata veriyor  */

// const { Server } = require("socket.io");
// const io = new Server(3000, { /* options */ });
// io.on("connection", (socket) => {
//   // ...
// });


