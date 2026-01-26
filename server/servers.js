// Create express and scoket.io servers
const express = require("express");
const app = express();
const expressServer = app.listen(9000, () => {
  console.log("Express + Socket.IO server running on port 9000");
});

const { Server } = require("socket.io");
const io = new Server(expressServer, {
  cors: ["http://localhost:5173"],
});

module.exports = { app, io };
