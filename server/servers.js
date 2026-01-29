// Create express and socket.io servers
const express = require("express");
const app = express();
const expressServer = app.listen(9000, () => {
  console.log("Server running on port 9000");
});

const { Server } = require("socket.io");
const io = new Server(expressServer, {
  cors: ["http://localhost:5173"],
});

module.exports = { app, io };
