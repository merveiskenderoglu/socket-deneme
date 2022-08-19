/* Realtime Colors

// Backend App.js - Socket.io server

const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
	res.send("hello");
});

let lastColor = "#282c34";

io.on("connection", (socket) => {
	console.log("bir kullanıcı bağlandı!");

	socket.emit("receive", lastColor);

	socket.on("newColor", (color) => {
		console.log(color);

		lastColor = color;
		io.emit("receive", color);
	});

	socket.on("disconnect", () => {
		console.log("Bir kullanıcı ayrıldı.");
	});
});

http.listen(3001, () => console.log("Server is up 🚀 🚀"));




// socketApi.js

import io from "socket.io-client";

let socket;

export const init = () => {
  console.log("Sunucuya bağlanılıyor...");

  socket = io("http://localhost:3001", {
    transports: ["websocket"],
  });

  socket.on("connect", () =>
    console.log("Sunucuya bağlantı başarıyla gerçekleşti.")
  );
};

export const send = (color) => {
  socket.emit("newColor", color);
};

export const subscribe = (cb) => {
  socket.on("receive", (color) => {
    console.log(color);
    cb(color);
  });
};


// Client App.js
import "./App.css";

import { useEffect, useState } from "react";
import { init, subscribe } from "./socketApi";
import Palatte from "./components/Palatte";

function App() {
	const [activeColor, setActiveColor] = useState("#282c34");

	useEffect(() => {
		init();

		subscribe((color) => {
			setActiveColor(color);
		});
	}, []);

	return (
		<div className="App" style={{ backgroundColor: activeColor }}>
			<h1>{activeColor}</h1>
			<Palatte activeColor={activeColor} />
		</div>
	);
}

export default App;

// Client Palette.js

import { useState } from "react";

import { send } from "../socketApi";

function Palatte({ activeColor }) {
	const [color, setColor] = useState("#000");

	return (
		<div className="palette">
			<input
				type="color"
				value={activeColor}
				onChange={(e) => setColor(e.target.value)}
			/>
			<button onClick={() => send(color)}>Click</button>
		</div>
	);
}

export default Palatte;

*/

// Chat App

// Backend Index.js

/* const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const cors = require("cors");

const Messages = require("./lib/Messages");

app.use(cors());

app.get("/", (req, res) => {
	res.end("Merhaba Socket.IO");
});

io.on("connection", (socket) => {
	console.log("a user connected");

	Messages.list((data) => {
		console.log(data);
		socket.emit("message-list", data);
	});

	socket.on("new-message", (message) => {
		console.log(message);
		Messages.upsert({ message });

		socket.broadcast.emit("receive-message", message);
	});

	socket.on("disconnect", () => console.log("a user disconnected"));
});

http.listen(process.env.PORT || "3000", () => {
	console.log("listening on *:3000");
});


// socketApi.js
import io from "socket.io-client";

let socket;

export const init = () => {
	console.log("Connecting...");

	socket = io("http://localhost:3000", {
		transports: ["websocket"],
	});

	socket.on("connect", () => console.log("Connected!"));
};

export const sendMessage = (message) => {
	if (socket) socket.emit("new-message", message);
};

export const subscribeChat = (cb) => {
	if (!socket) return;

	socket.on("receive-message", (message) => {
		console.log("Yeni mesaj var", message);
		cb(message);
	});
};

export const subscribeInitialMessages = (cb) => {
	if (!socket) return;

	socket.on("message-list", (messages) => {
		console.log("Initial", messages);
		cb(messages);
	});
};

// Chat Context

import { createContext, useState, useContext } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
	const [messages, setMessages] = useState([]);

	const values = {
		messages,
		setMessages,
	};

	return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

export const useChat = () => useContext(ChatContext);

*/

